import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from '../src/core/core.module';

import { ContentModule } from '../src/content/content.module';
import { BookingFunnelModule } from '../src/booking-funnel/booking-funnel.module';

import { BOOTSTRAP_COMPONENTS as BFBS } from '../src/booking-funnel/constants';
import { BOOTSTRAP_COMPONENTS as CBS } from '../src/content/constants';

import { NavigationService } from '../src/core/services/navigation.service';
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
  ],
  bootstrap: [
    ...BFBS,
    ...CBS
  ]
})
export class AppModule { }
