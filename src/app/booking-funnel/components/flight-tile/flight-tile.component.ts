import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight.interface';


@Component({
  selector: 'flight-tile',
  templateUrl: './flight-tile.component.html',
  styleUrls: ['./flight-tile.component.scss']
})
export class FlightTileComponent  {

  @Input() flight: Flight;

  constructor() { }

}
