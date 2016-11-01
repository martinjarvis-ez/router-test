import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchCriteria } from './search-criteria'
import { IFlight } from './iflight';
import { IFlightResult } from './iflight-result';
import { FlightResultEventEmitter } from './flight-result-event-emitter';
import * as random from "lodash/random";
import * as cloneDeep from "lodash/cloneDeep";
import * as moment from 'moment';

@Injectable()
export class FindFlightService {

  model : SearchCriteria;

  outbound: FlightResultEventEmitter = new FlightResultEventEmitter();
  inbound: FlightResultEventEmitter = new FlightResultEventEmitter();

  private subscription : Subscription;
  constructor(private search : SearchService) {
      this.subscription = this.search.Stream.subscribe(criteria => this.processCriteria(criteria));
   }
    private processCriteria(criteria:SearchCriteria ){
          this.model =criteria;
          var results = this.generateFlights(criteria.DepartureDate, criteria.DepartureAirport, criteria.ArrivalAirport);
          this.outbound.emit(results);
          if (!criteria.OneWay){
            results = this.generateFlights(criteria.ReturnDate, criteria.ArrivalAirport, criteria.DepartureAirport);
            this.inbound.emit(results);
          }else{
            this.inbound.emit([]);
          }
      }

      private generateFlights(target:Date, departureAirport:string, arrivalAirport:string): IFlightResult[] {
        var results : IFlightResult[] =[];
        for(var i=-1;i<=1;i++){
            var date = moment(target).startOf("d").add(i,"d");
            var result:IFlightResult = { Date: date.toDate(), DepartureAirport: departureAirport, ArrivalAirport:arrivalAirport, Flights: []};
            results.push(result);
            var numberOfFlights = random(4);
            var timeBetweenFlights = 1440 / numberOfFlights;
            for(var j=0;j<numberOfFlights;j++){
              var dt = date.add(j * timeBetweenFlights, "m");
                result.Flights.push({
                  DepartureDate:dt.toDate(),
                  ArrivalDate: dt.add(random(50,65),"m").toDate(),
                  DepartureAirport: departureAirport,
                   ArrivalAirport:arrivalAirport,
                   Price: random(50.99, 120)
                });
            }
        }
        return results;
      }
}
