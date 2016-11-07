import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { CoreModule } from '../src/app/core/core.module';
import { ContentModule } from '../src/app/content/content.module';
import { BookingFunnelModule } from '../src/app/booking-funnel/booking-funnel.module';
/*import {COMPILER_PROVIDERS} from '@angular/compiler';*/
//import {AppComponent} from './app.component';
//import {EmbeddedViewResolver} from './embedded-view-resolver';


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
    ...ContentModule.forRoot()/*,
    ...COMPILER_PROVIDERS*/
  ],
  //bootstrap: [AppComponent,  [{provide : ViewResolver, useClass: EmbeddedViewResolver}]]
  bootstrap: [...BookingFunnelModule.getBootstrapComponents(), ...ContentModule.getBootstrapComponents()]
})
export class AppModule { }
