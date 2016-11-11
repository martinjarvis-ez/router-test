import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SessionStorageService } from 'ng2-webstorage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Airport, Country, AirportsResult } from '../models/index';
import { SettingsService } from '../../core/index';


@Injectable()
export class AirportService {

  private _airportsKey: string = 'airport-cache';
  private _airportLookupKey: string = 'airport-lookup-cache';
  private _countriesKey: string = 'country-cache';

  private _airports: BehaviorSubject<Airport[]>;
  private _airportLookup: BehaviorSubject<{ [iata: string]: Airport; }>;
  private _countries: BehaviorSubject<Country[]>;

  constructor(private http: Http, private settings: SettingsService, private storage: SessionStorageService) {
    let airports = this.storage.retrieve(this._airportsKey);
    this._airports = new BehaviorSubject<Airport[]>(airports || []);

    let countries = this.storage.retrieve(this._countriesKey);
    this._countries = new BehaviorSubject<Country[]>(countries || []);

    let lookup = this.storage.retrieve(this._airportLookupKey) || this.buildAirportLookup(airports || []);
    this._airportLookup = new BehaviorSubject<{ [iata: string]: Airport; }>(lookup);

    this.storage.observe(this._airportLookupKey).subscribe((data: { [iata: string]: Airport; }) => {
      if (data == null) {
        this.refresh();
      }
      else {
        this._airportLookup.next(data);
      }
    });

    this.storage.observe(this._airportsKey).subscribe((data: Airport[]) => {
      if (data == null) {
        this.refresh();
      }
      else {
        this._airports.next(data);
      }
    });

    this.storage.observe(this._countriesKey).subscribe((data: Country[]) => {
      if (data == null) {
        this.refresh();
      }
      else {
        this._countries.next(data);
      }
    });

    if (airports == null || countries == null) {
      this.refresh();
    }
  }

  get airports(): BehaviorSubject<Airport[]> {
    return this._airports;
  }

  get airportLookup(): BehaviorSubject<{ [iata: string]: Airport; }> {
    return this._airportLookup;
  }
  get countries(): BehaviorSubject<Country[]> {
    return this._countries;
  }

  refresh() {
    this.http.get(this.settings.airportReferenceUrl)
      .map(res => res.json() as AirportsResult)
      .catch(this.handleError)
      .subscribe(results => {
        this.storage.store(this._airportLookupKey, this.buildAirportLookup(results.Airports));
        this.storage.store(this._airportsKey, results.Airports);
        this.storage.store(this._countriesKey, results.Countries);
      });
  }

  buildAirportLookup(list: Airport[]): { [iata: string]: Airport; } {
    return list.reduce((map: { [iata: string]: Airport; }, current: Airport) => {
      map[current.Iata] = current;
      return map;
    }, {});
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
