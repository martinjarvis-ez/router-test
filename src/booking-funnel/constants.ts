import { Type } from '@angular/core';
import { SearchPodComponent } from './components/search-pod/search-pod.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { FlightGridComponent } from './components/flight-grid/flight-grid.component';
import { FlightTileComponent } from './components/flight-tile/flight-tile.component';
import { SearchCriteriaDebugComponent } from './components/search-criteria-debug/search-criteria-debug.component';
import { SearchService } from './services/search.service';
import { FindFlightService } from './services/find-flight.service';

import { FlightResult } from './models/flight-result.interface';
import { Flight } from './models/flight.interface';
import { PassengerMix } from './models/passenger-mix';
import { SearchCriteria } from './models/search-criteria';
import { FlightType } from './models/flight-type.enum';
import { RawResults, FlightSummary, FlightFare, Prices, Price, SegmentId, FlightNumber   } from './models/raw-flight-results.interface';

export const COMPONENTS: Type<any>[] = [
  SearchPodComponent,
  SearchCriteriaDebugComponent,
  FlightResultComponent,
  FlightGridComponent,
  FlightTileComponent];

export const BOOTSTRAP_COMPONENTS: Type<any>[] = [
  SearchPodComponent
]

export const SERVICES: Type<any>[] = [
  SearchService,
  FindFlightService];

export const COMPONENT_MAPPING: { [path: string]: any; } = {
  "/Views/SearchPod.cshtml": SearchPodComponent,
  "/Views/SearchPodCriteriaDebug.cshtml": SearchCriteriaDebugComponent,
  "/Views/FlightResult.cshtml": FlightResultComponent
};

export const MODELS: Type<any>[] = [
//  Flight,
  //FlightType,
  //FlightResult,
  PassengerMix,
  //RawResults, FlightSummary, FlightFare, Prices, Price, SegmentId, FlightNumber,
  SearchCriteria

];
