import { Component } from '@angular/core';
import { FlightType } from '../../models/index';

@Component({
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent {

  flightType = FlightType;
  constructor() { }
}
