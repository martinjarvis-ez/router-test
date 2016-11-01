import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {APP_ROUTES } from './app.routes';

import { Settings } from './settings';
import { FactoryMap } from './factory-map.service';

import { ControlResolver } from './control-resolver';
import { ControlService } from './control.service';
import { ControlToComponentMapperService } from './control-to-component-mapper.service';
import { CurrentContentService } from './current-content.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LayoutComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  entryComponents: [AppComponent, NotFoundComponent, LayoutComponent, MasterLayoutComponent],
  providers: [ControlResolver, ControlService, ControlToComponentMapperService, CurrentContentService, FactoryMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
