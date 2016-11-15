import { Type } from '@angular/core';
import { AirportSelectorComponent, SearchPodComponent, FlightResultComponent, FlightGridComponent, FlightTileComponent, SearchCriteriaDebugComponent, AirportNameComponent } from './components/index';
import { AirportSelectorDrawerComponent, RecentSearchesDrawerComponent } from './drawers/index';
import { SearchCriteria, PassengerMix } from './models/index';

import { SearchService, AirportService, FindFlightService } from './services/index';

export const BOOKING_FUNNEL_SERVICES: Type<any>[] = [
  SearchService,
  FindFlightService,
  AirportService];

export const BOOKING_FUNNEL_COMPONENT_MAPPING: { [path: string]: Type<any>; } = {
  "/Views/SearchPod.cshtml": SearchPodComponent,
  "/Views/SearchPodCriteriaDebug.cshtml": SearchCriteriaDebugComponent,
  "/Views/FlightResult.cshtml": FlightResultComponent,
  "/Views/AirportSelector.cshtml": AirportSelectorComponent
};

export const BOOKING_FUNNEL_ROOT_COMPONENTS: { [key: string]: Type<any>; } = {
  "search-pod": SearchPodComponent,
  "search-criteria-debug": SearchCriteriaDebugComponent,
  "flight-result": FlightResultComponent
};

export const BOOKING_FUNNEL_COMPONENTS: Type<any>[] = [
  SearchPodComponent,
  SearchCriteriaDebugComponent,
  FlightResultComponent,
  FlightGridComponent,
  FlightTileComponent,
  AirportSelectorComponent,
  AirportSelectorDrawerComponent,
  RecentSearchesDrawerComponent,
  AirportNameComponent];

export const BOOKING_FUNNEL_DRAWERS: Type<any>[] = [
  AirportSelectorDrawerComponent,
  RecentSearchesDrawerComponent,
];

export const BOOKING_FUNNEL_BOOTSTRAP_COMPONENTS: Type<any>[] = [
  SearchPodComponent,
  FlightResultComponent,
  FlightResultComponent
]

export const BOOKING_FUNNEL_MODELS: Type<any>[] = [
  PassengerMix,
  SearchCriteria
];
