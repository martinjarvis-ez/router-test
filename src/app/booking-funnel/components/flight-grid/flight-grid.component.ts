import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FindFlightService } from '../../services/index';
import { Subscription } from 'rxjs/Subscription';
import { FlightResult, FlightType } from '../../models/index';

@Component({
  selector: 'flight-grid',
  templateUrl: './flight-grid.component.html',
  styleUrls: ['./flight-grid.component.scss']
})
export class FlightGridComponent implements OnInit, OnDestroy {

  @Input() flightType: FlightType;

  model: FlightResult[];

  get direction(): string {
    return FlightType[this.flightType];
  }

  private subscription: Subscription;

  constructor(private findFlight: FindFlightService) { }

  ngOnInit() {
    if (this.flightType === FlightType.Outbound) {
      this.subscription = this.findFlight.outbound.subscribe((results: FlightResult[]) => this.updateResults(results));
    } else {
      this.subscription = this.findFlight.inbound.subscribe((results: FlightResult[]) => this.updateResults(results));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateResults(results: FlightResult[]) {
    this.model = results;
  }

}
