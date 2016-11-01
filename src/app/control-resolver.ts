import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,Router   } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import {ControlService} from './control.service';
import {Control} from './control';

@Injectable()
export class ControlResolver implements Resolve<Control>  {
  constructor(private backend: ControlService, private router: Router) {}

 resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
   return this.backend.fetchContent(route.params['contentId'])
    .catch(err => this.router.navigate(['/not-found']));
 }
}
