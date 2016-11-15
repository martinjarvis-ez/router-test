import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { CoreModule } from '../core/core.module';

import { CONTENT_COMPONENTS, CONTENT_SERVICES, CONTENT_COMPONENT_MAPPING, CONTENT_BOOTSTRAP_COMPONENTS } from './constants';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CoreModule
  ],
  declarations: [...CONTENT_COMPONENTS],
  entryComponents: [...CONTENT_COMPONENTS],
  providers: [...CONTENT_SERVICES]
})
export class ContentModule {

  static forRoot(): Type<any>[] {
    return CONTENT_SERVICES;
  }

  static getComponentMappings(): { [path: string]: Type<any>; } {
    return CONTENT_COMPONENT_MAPPING;
  }

  static getBootstrapComponents(){
    return CONTENT_BOOTSTRAP_COMPONENTS;
  }

}
