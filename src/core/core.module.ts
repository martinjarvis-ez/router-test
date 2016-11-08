import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { COMPONENTS, SERVICES, DIRECTIVES } from './constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  entryComponents: [...COMPONENTS],
  providers: [...SERVICES],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class CoreModule {

  static forRoot(): Type<any>[] {
    return [...SERVICES];
  }

}
