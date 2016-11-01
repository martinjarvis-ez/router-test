import { Component, Input } from '@angular/core';
import { IFlight } from '../iflight';

@Component({
  selector: 'flight-tile',
  templateUrl: './flight-tile.component.html',
  styleUrls: ['./flight-tile.component.scss']
})
export class FlightTileComponent  {

  @Input() flight: IFlight;

  constructor() { }

}
