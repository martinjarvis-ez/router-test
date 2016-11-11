import { Type } from '@angular/core';
import { AirportSelectorComponent, SearchPodComponent, FlightResultComponent, FlightGridComponent, FlightTileComponent, SearchCriteriaDebugComponent, AirportNameComponent } from './components/index';
import { AirportSelectorDrawerComponent, RecentSearchesDrawerComponent } from './drawers/index';
import { SearchCriteria, PassengerMix } from './models/index';

import { SearchService, AirportService, FindFlightService } from './services/index';

export const SERVICES: Type<any>[] = [
  SearchService,
  FindFlightService,
  AirportService];

export const COMPONENT_MAPPING: { [path: string]: any; } = {
  "/Views/SearchPod.cshtml": SearchPodComponent,
  "/Views/SearchPodCriteriaDebug.cshtml": SearchCriteriaDebugComponent,
  "/Views/FlightResult.cshtml": FlightResultComponent,
  "/Views/AirportSelector.cshtml": AirportSelectorComponent
};

export const COMPONENTS: Type<any>[] = [
  SearchPodComponent,
  SearchCriteriaDebugComponent,
  FlightResultComponent,
  FlightGridComponent,
  FlightTileComponent,
  AirportSelectorComponent,
  AirportSelectorDrawerComponent,
  RecentSearchesDrawerComponent,
  AirportNameComponent];

export const DRAWERS: Type<any>[] = [
  AirportSelectorDrawerComponent,
  RecentSearchesDrawerComponent,
];

export const BOOTSTRAP_COMPONENTS: Type<any>[] = [
  SearchPodComponent
]

export const MODELS: Type<any>[] = [
  PassengerMix,
  SearchCriteria
];
