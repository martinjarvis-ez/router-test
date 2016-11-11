import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { BookingFunnelModule } from './booking-funnel';
import { ContentModule } from './content';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule,
    BookingFunnelModule,
    ContentModule
  ],
  providers: [
    ...ContentModule.forRoot(),
    ...BookingFunnelModule.forRoot(),
    ...CoreModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
