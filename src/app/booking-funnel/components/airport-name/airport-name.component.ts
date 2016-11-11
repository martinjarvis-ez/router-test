import { Component, OnDestroy, Input } from '@angular/core';
import { AirportService } from '../../services/index';
import { Airport } from '../../models/index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'airport-name',
  templateUrl: './airport-name.component.html',
  styleUrls: ['./airport-name.component.scss']
})
export class AirportNameComponent implements OnDestroy {

  private _airportCode: string;
  @Input('code') set code(code: string) {
    this._airportCode = code;
  }

  private _airportLookup: { [iata: string]: Airport; };
  private _sub: Subscription;

  constructor(private airport: AirportService) {
    this._sub = airport.airportLookup.subscribe((lookup) => this._airportLookup = lookup);
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  get airportName(): string {
    if (this._airportLookup && this._airportCode) {
      let airport = this._airportLookup[this._airportCode];
      if (airport) return airport.Name;
    }
    return "";
  }
}
