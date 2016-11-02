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
import { SearchService } from './search.service';
import { FindFlightService } from './find-flight.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { SearchPodComponent } from './search-pod/search-pod.component';
import { FlightGridComponent } from './flight-grid/flight-grid.component';
import { FlightTileComponent } from './flight-tile/flight-tile.component';
import { SearchCriteriaDebugComponent } from './search-criteria-debug/search-criteria-debug.component';
import { HtmlComponent } from './html/html.component';
import { FlightResultComponent } from './flight-result/flight-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LayoutComponent,
    MasterLayoutComponent,
    SearchPodComponent,
    FlightGridComponent,
    FlightTileComponent,
    SearchCriteriaDebugComponent,
    HtmlComponent,
    FlightResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  entryComponents: [AppComponent, NotFoundComponent, LayoutComponent, MasterLayoutComponent,   SearchPodComponent,
    FlightGridComponent,
    FlightTileComponent,
    SearchCriteriaDebugComponent,HtmlComponent,FlightResultComponent],
  providers: [ControlResolver, ControlService, ControlToComponentMapperService, CurrentContentService, FactoryMap,SearchService, FindFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
