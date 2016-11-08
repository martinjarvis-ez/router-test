import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  flightSearchUrl: string = 'http://webapi-flightsearchv1.europe.easyjet.local/api/flights';
  // flightSearchUrl: string = 'assets/flight-results/flight-search.json';
  //contentUrl:string = 'http://sitecorepoc/sitecore/api/content/';
  contentUrl:string = 'assets/content/';
  defaultContentId:string = '110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9';
}
