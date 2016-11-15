import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core';
import { Ng2Webstorage } from 'ng2-webstorage';
import { BOOKING_FUNNEL_COMPONENTS, BOOKING_FUNNEL_COMPONENT_MAPPING, BOOKING_FUNNEL_BOOTSTRAP_COMPONENTS, BOOKING_FUNNEL_SERVICES } from './constants';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CoreModule,
    Ng2Webstorage
  ],
  declarations: [...BOOKING_FUNNEL_COMPONENTS],
  entryComponents: [...BOOKING_FUNNEL_COMPONENTS],
  providers: [...BOOKING_FUNNEL_SERVICES]
})
export class BookingFunnelModule {

  static forRoot(): Type<any>[] {
    return [...BOOKING_FUNNEL_SERVICES, Ng2Webstorage];
  }

  static getComponents(): Type<any>[] {
    return BOOKING_FUNNEL_COMPONENTS;
  }

  static getComponentMappings(): { [path: string]: Type<any>; } {
    return BOOKING_FUNNEL_COMPONENT_MAPPING;
  }

  static getBootstrapComponents() {
    return BOOKING_FUNNEL_BOOTSTRAP_COMPONENTS;
  }

}
