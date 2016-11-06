import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight.interface';

let module:any; // nasty fix for systemJs

@Component({
  moduleId: module.id, // nasty fix for systemJs
  selector: 'flight-tile',
  templateUrl: './flight-tile.component.html',
  styleUrls: ['./flight-tile.component.scss']
})
export class FlightTileComponent  {

  @Input() flight: Flight;

  constructor() { }

}
