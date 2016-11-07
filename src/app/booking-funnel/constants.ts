import { Type } from '@angular/core';
import { SearchPodComponent } from './components/search-pod/search-pod.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { FlightGridComponent } from './components/flight-grid/flight-grid.component';
import { FlightTileComponent } from './components/flight-tile/flight-tile.component';
import { SearchCriteriaDebugComponent } from './components/search-criteria-debug/search-criteria-debug.component';
import { SearchService } from './services/search.service';
import { FindFlightService } from './services/find-flight.service';

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
