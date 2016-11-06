import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { COMPONENTS, SERVICES, DIRECTIVES } from './constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  entryComponents: [...COMPONENTS],
  providers: [...SERVICES, ...COMPILER_PROVIDERS],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class CoreModule {

  static forRoot(): Type<any>[] {
    return [...SERVICES];
  }

}
