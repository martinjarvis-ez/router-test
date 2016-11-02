import { Injectable } from '@angular/core';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SearchPodComponent } from './search-pod/search-pod.component';
import { SearchCriteriaDebugComponent } from './search-criteria-debug/search-criteria-debug.component';
import { HtmlComponent } from './html/html.component';
import { FlightResultComponent } from './flight-result/flight-result.component';

@Injectable()
export class FactoryMap{
  map: {[path:string]: any;}={
   "/Views/Shared/Master Layout.cshtml" : MasterLayoutComponent,
   "/Views/SearchPod.cshtml": SearchPodComponent,
   "/Views/SearchPodCriteriaDebug.cshtml": SearchCriteriaDebugComponent,
   "/Views/Html.cshtml" : HtmlComponent,
   "/Views/FlightResult.cshtml" : FlightResultComponent
 };
}
