import { Component } from '@angular/core';
import { FlightType } from '../../models/flight-type.enum';

let module:any; // nasty fix for systemJs

@Component({
  moduleId: module.id, // nasty fix for systemJs
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent {

  flightType = FlightType;
  constructor() { }
}
