import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchCriteria } from './search-criteria'
import { PassengerMix } from './passenger-mix'
import { Flight } from './flight.interface';
import { RawResults, FlightSummary, FlightFare, Prices, Price, SegmentId, FlightNumber } from './raw-flight-results.interface'
import { Settings } from './settings';
import { FlightResult } from './flight-result.interface';
import { FlightResultEventEmitter } from './flight-result-event-emitter';
import * as orderBy from "lodash/orderBy";
import * as moment from 'moment';
import { Http, Response, Headers, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class FindFlightService {

  model: SearchCriteria;

  outbound: FlightResultEventEmitter = new FlightResultEventEmitter();
  inbound: FlightResultEventEmitter = new FlightResultEventEmitter();

  private subscription: Subscription;
  constructor(private search: SearchService, private http: Http) {
    this.subscription = this.search.Stream.subscribe(criteria => this.processCriteria(criteria));
  }

  private processCriteria(criteria: SearchCriteria) {
    this.model = criteria;
    this.processOutbound(criteria);
    if (!criteria.OneWay) {
      this.processInbound(criteria);
    } else {
      this.inbound.emit([]);
    }
  }

  private processInbound(criteria: SearchCriteria) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('DepartureIata', criteria.ArrivalAirport);
    params.set('ArrivalIata', criteria.DepartureAirport);
    params.set('AdultSeats', `${criteria.Mix.AdultCount}`);
    params.set('ChildSeats', `${criteria.Mix.ChildCount}`);
    params.set('AdditionalSeats', `${criteria.Mix.InfantCount}`);
    var maxDate = moment(criteria.ReturnDate).startOf("d").add(1, "d");
    params.set('MaxDepartureDate', maxDate.format('YYYY-MM-DD'));
    var minDate = moment(criteria.ReturnDate).startOf("d").add(-1, "d");
    params.set('MinDepartureDate', minDate.format('YYYY-MM-DD'));
    params.set('IncludeFlexiFares', "false");
    params.set('IncludePrices', "true");
    params.set('IsTransfer', "false");
    params.set('LanguageCode', "EN");
    let opts: RequestOptionsArgs = { search: params };
    this.http.get(Settings.FlightSearchUrl, opts)
      .map(res => this.mapFlights(res, criteria.ArrivalAirport, criteria.DepartureAirport, minDate, maxDate))
      .catch(this.handleError)
      .subscribe(results => this.inbound.emit(results));
  };

  private processOutbound(criteria: SearchCriteria) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('DepartureIata', criteria.DepartureAirport);
    params.set('ArrivalIata', criteria.ArrivalAirport);
    params.set('AdultSeats', `${criteria.Mix.AdultCount}`);
    params.set('ChildSeats', `${criteria.Mix.ChildCount}`);
    params.set('AdditionalSeats', `${criteria.Mix.InfantCount}`);
    var maxDate = moment(criteria.DepartureDate).startOf("d").add(1, "d");
    params.set('MaxDepartureDate', maxDate.format('YYYY-MM-DD'));
    var minDate = moment(criteria.DepartureDate).startOf("d").add(-1, "d");
    params.set('MinDepartureDate', minDate.format('YYYY-MM-DD'));
    params.set('IncludeFlexiFares', "false");
    params.set('IncludePrices', "true");
    params.set('IsTransfer', "false");
    params.set('LanguageCode', "EN");
    let opts: RequestOptionsArgs = { search: params };
    this.http.get(Settings.FlightSearchUrl, opts)
      .map(res => this.mapFlights(res, criteria.DepartureAirport, criteria.ArrivalAirport, minDate, maxDate))
      .catch(this.handleError)
      .subscribe(results => this.outbound.emit(results));
  };

  private mapFlights(res: Response, departureAirport: string, arrivalAirport: string, minDate: moment.Moment, maxDate: moment.Moment): FlightResult[] {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    }
    else {
      let rr = res.json() as RawResults;
      let flights = orderBy(rr.Flights, (f: FlightSummary) => f.LocalDepartureTime);
      let frs: FlightResult[] = [];
      let currentDate = moment(minDate).startOf('day');
      let max = moment(maxDate).startOf('day');
      while (currentDate <= max) {
        let fls: Flight[] = [];
        let fr: FlightResult = {
          Date: currentDate.toDate(),
          DepartureAirport: departureAirport,
          ArrivalAirport: arrivalAirport,
          Flights: fls
        };

        frs.push(fr);
        for (let fdidx = 0; fdidx < flights.length; fdidx++) {
          let fs = flights[fdidx];
          if (moment(fs.SegmentId.Date).format('YYYY MM DD') !== currentDate.format('YYYY MM DD')) {
            continue;
          }
          let f: Flight = {
            DepartureAirport: departureAirport,
            ArrivalAirport: arrivalAirport,
            DepartureDate: fs.LocalDepartureTime,
            ArrivalDate: fs.LocalArrivalTime,
            Price: fs.FlightFares[0].Prices.Adult.Value
          };
          fls.push(f);
        }
        currentDate.add(1, "day");
      }
      return frs;
    }

  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
