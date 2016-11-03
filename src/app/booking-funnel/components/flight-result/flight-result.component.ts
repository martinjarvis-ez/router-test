import { Component } from '@angular/core';
import { FlightType } from 'booking-funnel/models/flight-type.enum';

@Component({
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent {

  flightType = FlightType;
  constructor() { }
}
