import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {Settings} from './settings';
import {Control} from './control';

@Injectable()
export class ControlService {

  constructor(private http : Http) { }

  fetchContent(contentId:string): Observable<Control>{
      let contentid = contentId;
      if (!contentid) contentid=Settings.DefaultContentId;
      let contentUrl = `${Settings.ContentUrl}${contentid}`;
      let control$ = this.http
        .get(contentUrl)
        .map(this.mapContent)
        .catch(this.handleError);
        return control$;
    }

    private mapContent(res:Response): Control{
      if(res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
      }
        else {
         return res.json() as Control;
    }

    }

    private handleError (error: Response | any) {
      let errMsg: string;
          if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
          } else {
            errMsg = error.message ? error.message : error.toString();
          }
          console.error(errMsg);
          return Observable.throw(errMsg);
    }

}