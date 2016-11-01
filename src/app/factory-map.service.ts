import { Injectable } from '@angular/core';
import { MasterLayoutComponent } from './master-layout/master-layout.component';

@Injectable()
export class FactoryMap{
  map: {[path:string]: any;}={
   "/Views/Shared/Master Layout.cshtml" : MasterLayoutComponent
 };
}
