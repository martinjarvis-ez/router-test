import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CORE_COMPONENTS, CORE_SERVICES, CORE_DIRECTIVES } from './constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [...CORE_COMPONENTS, ...CORE_DIRECTIVES],
  entryComponents: [...CORE_COMPONENTS],
  providers: [...CORE_SERVICES],
  exports: [...CORE_COMPONENTS, ...CORE_DIRECTIVES]
})
export class CoreModule {

  static forRoot(): Type<any>[] {
    return [...CORE_SERVICES];
  }

}
