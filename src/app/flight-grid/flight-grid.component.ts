import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FindFlightService } from '../find-flight.service';
import { Subscription } from 'rxjs/Subscription';
import { FlightResult } from '../flight-result.interface';
import { FlightType } from '../flight-type.enum';

@Component({
  selector: 'flight-grid',
  templateUrl: './flight-grid.component.html',
  styleUrls: ['./flight-grid.component.scss']
})
export class FlightGridComponent implements OnInit {

  @Input() flightType: FlightType;

  model: FlightResult[];

  get direction():string{
    return FlightType[this.flightType];
  }

  private subscription : Subscription;

  constructor(private findFlight : FindFlightService){}

  ngOnInit() {
    if (this.flightType === FlightType.Outbound){
      this.subscription = this.findFlight.outbound.subscribe(results => this.updateResults(results));
    } else {
      this.subscription = this.findFlight.inbound.subscribe(results => this.updateResults(results));
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private updateResults(results: FlightResult[]){
    this.model = results;
  }

}
