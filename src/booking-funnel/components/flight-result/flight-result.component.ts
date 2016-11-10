import { Component } from '@angular/core';
import { FlightType } from '../../models/flight-type.enum';

var module:any;

@Component({
  moduleId: module.id,
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent {

  flightType = FlightType;
  constructor() { }
}
