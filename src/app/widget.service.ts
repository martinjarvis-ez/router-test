import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Settings} from './settings';
import {Widget} from './widget';

@Injectable()
export class WidgetService {

  constructor(private http : Http) { }

  fetchContent(contentId:string): Observable<Widget>{
      let contentid = contentId;
      if (!contentid) contentid=Settings.DefaultContentId;
      let widget$ = this.http
        .get(`${Settings.ContentUrl}${contentid}`, {headers: this.getHeaders()})
        .map(this.mapWidget);
        return widget$;
    }

    private mapWidget(response:Response): Widget{
       return response.json() as Widget;
    }

    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }

}
