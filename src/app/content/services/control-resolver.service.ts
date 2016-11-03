import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router   } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ControlService } from './control.service';
import { CurrentContentService } from './current-content.service';
import { Layout } from 'core/models/control';

@Injectable()
export class ControlResolverService implements Resolve<Layout>  {
  constructor(private backend: ControlService, private router: Router, private current: CurrentContentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.backend.fetchContent(route.params['contentId'])
      .map(l=>  {
        this.current.Stream.emit(l);
        return l;
      })
      .catch(err => this.router.navigate(['/not-found']));
  }
}
