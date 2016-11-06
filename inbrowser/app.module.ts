import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { CoreModule } from '../src/app/core/core.module';
import { BookingFunnelModule } from '../src/app/booking-funnel/booking-funnel.module';
//import {AppComponent} from './app.component';
//import {EmbeddedViewResolver} from './embedded-view-resolver';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CoreModule,
    BookingFunnelModule
  ],
  
  providers: [
    ...BookingFunnelModule.forRoot(),
    ...CoreModule.forRoot()],
  //bootstrap: [AppComponent,  [{provide : ViewResolver, useClass: EmbeddedViewResolver}]]
  bootstrap: [...BookingFunnelModule.getComponents()]
})
export class AppModule { }
