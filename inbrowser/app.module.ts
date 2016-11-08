import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from '../src/app/core/core.module';

import { ContentModule } from '../src/app/content/content.module';
import { BookingFunnelModule } from '../src/app/booking-funnel/booking-funnel.module';

import { NavigationService } from '../src/app/core/services/navigation.service';
import { BrowserNavigationService } from './browser-navigation.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CoreModule,
    ContentModule,
    BookingFunnelModule
  ],

  providers: [
    ...BookingFunnelModule.forRoot(),
    ...CoreModule.forRoot(),
    ...ContentModule.forRoot(),
    { provide: NavigationService, useClass: BrowserNavigationService }
  ]
  bootstrap: [
    ...BookingFunnelModule.getBootstrapComponents(),
    ...ContentModule.getBootstrapComponents()
  ]
})
export class AppModule { }
