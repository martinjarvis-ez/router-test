import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {SettingsService} from 'core/services/settings.service';
import {Layout} from 'core/models/control';


@Injectable()
export class ControlService {

  constructor(private http: Http, private settings:SettingsService) { }

  fetchContent(contentId: string): Observable<Layout> {
    let contentid = contentId;
    if (!contentid) contentid = this.settings.defaultContentId;
    let contentUrl = `${this.settings.contentUrl}${contentid}`;
    let control$ = this.http
      .get(contentUrl)
      .map(this.mapContent)
      .catch(this.handleError);
    return control$;
  }

  private mapContent(res: Response): Layout {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    }
    else {
      let c = res.json() as Layout;
      return c;
    }

  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
