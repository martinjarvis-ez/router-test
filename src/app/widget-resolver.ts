import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,Router   } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import {WidgetService} from './widget.service';
import {Widget} from './widget';

@Injectable()
export class WidgetResolver implements Resolve<Widget>  {
  constructor(private backend: WidgetService, private router: Router) {}

 resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
   return this.backend.fetchContent(route.params['contentId'])
    .catch(err => this.router.navigate(['/not-found']));
 }
}
