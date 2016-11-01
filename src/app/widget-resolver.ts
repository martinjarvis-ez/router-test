import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot   } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {WidgetService} from './widget.service';
import {Widget} from './widget';

@Injectable()
export class WidgetResolver implements Resolve<Widget>  {
  constructor(private backend: WidgetService) {}

 resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<any>|Promise<any>|any {
   return this.backend.fetchContent(route.params['contentId']);
 }
}
