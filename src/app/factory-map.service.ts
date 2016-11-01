import { Injectable } from '@angular/core';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SearchPodComponent } from './search-pod/search-pod.component';

@Injectable()
export class FactoryMap{
  map: {[path:string]: any;}={
   "/Views/Shared/Master Layout.cshtml" : MasterLayoutComponent,
   "/Views/SearchPod.cshtml": SearchPodComponent
 };
}
