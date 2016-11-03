import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { COMPONENTS, SERVICES, COMPONENT_MAPPING } from './constants';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
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
