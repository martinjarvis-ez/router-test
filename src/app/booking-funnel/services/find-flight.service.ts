import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import * as orderBy from "lodash/orderBy";
import * as moment from 'moment';

import { SearchService } from './search.service';
import { RawResults, FlightSummary, FlightFare, Prices, Price, SegmentId, FlightNumber, FlightResult, Flight, PassengerMix, SearchCriteria } from '../models/index'

import { SettingsService } from '../../core/index';

@Injectable()
export class FindFlightService {

  model: SearchCriteria;

  outbound = new BehaviorSubject<FlightResult[]>(null);
  inbound = new BehaviorSubject<FlightResult[]>(null);

  private subscription: Subscription;
  constructor(private search: SearchService, private http: Http, private settings: SettingsService) {
    this.subscription = this.search.Stream.subscribe(criteria => this.processCriteria(criteria));
  }

  private processCriteria(criteria: SearchCriteria) {
    if (!(criteria.ArrivalAirport && criteria.DepartureAirport && criteria.DepartureDate)){
      return;
    }
    this.model = criteria;

    this.processOutbound(criteria);
    if (!criteria.OneWay) {
      this.processInbound(criteria);
    } else {
      this.inbound.next([]);
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
    this.http.get(this.settings.flightSearchUrl, opts)
      .map(res => this.mapFlights(res, criteria.ArrivalAirport, criteria.DepartureAirport, minDate, maxDate))
      .catch(this.handleError)
      .subscribe(results => this.inbound.next(results));
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
    this.http.get(this.settings.flightSearchUrl, opts)
      .map(res => this.mapFlights(res, criteria.DepartureAirport, criteria.ArrivalAirport, minDate, maxDate))
      .catch(this.handleError)
      .subscribe(results => this.outbound.next(results));
  };

  private mapFlights(res: Response, departureAirport: string, arrivalAirport: string, minDate: moment.Moment, maxDate: moment.Moment): FlightResult[] {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    }
    else {
      let rr = res.json() as RawResults;
      let flights = orderBy(rr.flights, (f: FlightSummary) => f.localDepartureTime);
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
          if (moment(fs.segmentId.date).format('YYYY MM DD') !== currentDate.format('YYYY MM DD')) {
            continue;
          }
          let f: Flight = {
            DepartureAirport: departureAirport,
            ArrivalAirport: arrivalAirport,
            DepartureDate: fs.localDepartureTime,
            ArrivalDate: fs.localArrivalTime,
            Price: fs.flightFares[0].prices.adult.value
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
