import { Component, Input } from '@angular/core';
import { Flight } from '../../models/index';

@Component({
  selector: 'flight-tile',
  templateUrl: './flight-tile.component.html',
  styleUrls: ['./flight-tile.component.scss']
})
export class FlightTileComponent  {

  @Input() flight: Flight;

  constructor() { }

}
