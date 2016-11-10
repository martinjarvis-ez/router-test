import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import {Ng2Webstorage} from 'ng2-webstorage';
import { COMPONENTS, SERVICES, COMPONENT_MAPPING, BOOTSTRAP_COMPONENTS } from './constants';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CoreModule,
    Ng2Webstorage
  ],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
  providers: [...SERVICES]
})
export class BookingFunnelModule {

  static forRoot(): Type<any>[] {
    return [...SERVICES, Ng2Webstorage];
  }

  static getComponents(): Type<any>[] {
    return COMPONENTS;
  }

  static getComponentMappings(): { [path: string]: any; } {
    return COMPONENT_MAPPING;
  }

  static getBootstrapComponents() {
    return BOOTSTRAP_COMPONENTS;
  }

}
