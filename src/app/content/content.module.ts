import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { CoreModule } from '../core/core.module';

import { COMPONENTS, SERVICES, COMPONENT_MAPPING } from './constants';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CoreModule
  ],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
  providers: [...SERVICES]
})
export class ContentModule {

  static forRoot(): Type<any>[] {
    return SERVICES;
  }

  static getComponentMappings(): { [path: string]: any; } {
    return COMPONENT_MAPPING;
  }

}
