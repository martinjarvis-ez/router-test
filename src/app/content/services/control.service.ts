import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {SettingsService, Layout} from '../../core/index';


@Injectable()
export class ControlService {

  constructor(private http: Http, private settings: SettingsService) { }

  //  private _defaultContent: Layout = <Layout>JSON.parse('{ "name": "Master Layout", "path": "/Views/Shared/Master Layout.cshtml", "placeholders": [{ "name": "main", "controls": [{ "name": "Banner", "type": "View Rendering", "path": "/Views/Banner.cshtml", "dataSources": [{ "type": "Banner", "name": "Search Pod", "path": "content/Home/Search Pod", "fields": [{ "name": "Banner Image", "type": "Single Line Text", "value": "http://sitecorepoc/sitecore/shell/-/media/EasyJet/inspireme-desktop.ashx" }] }] }] }, { "name": "main/banner", "controls": [{ "name": "Search Pod", "type": "View Rendering", "path": "/Views/SearchPod.cshtml", "dataSources": [{ "type": "Search Pod Model", "name": "Search Pod", "path": "content/Home/Search Pod", "fields": [{ "name": "Departure Label", "type": "Single Line Text", "value": "Departure: " }, { "name": "Destination Label", "type": "Single Line Text", "value": "Destination: " }, { "name": "One Way Label", "type": "Single Line Text", "value": "One Way: " }, { "name": "Departure Date", "type": "Single Line Text", "value": "Departure Date: " }, { "name": "Return Date", "type": "Single Line Text", "value": "Return Date: " }, { "name": "Passenger Mix", "type": "Single Line Text", "value": "Passenger Mix: " }, { "name": "Next Step", "type": "Single Line Text", "value": "/FlightGrid" }] }] }] }, { "name": "basket", "controls": [{ "name": "Search Pod Debug", "type": "View Rendering", "path": "/Views/SearchPodCriteriaDebug.cshtml" }] }, { "name": "header", "controls": [] }, { "name": "footer", "controls": [{ "name": "Html Footer Text", "type": "View Rendering", "path": "/Views/Html.cshtml", "dataSources": [{ "type": "Footer Text", "name": "Footer Text", "path": "content/Home/Footer Text", "fields": [{ "name": "Body", "type": "Single Line Text", "value": "<p><strong>CMS Driven</strong> Footer Text<p>" }] }] }] }] }');
  //  private _flightGrid: Layout = <Layout>JSON.parse('{ "name": "Master Layout", "path": "/Views/Shared/Master Layout.cshtml", "placeholders": [{ "name": "main", "controls": [{ "name": "Search Pod", "type": "View Rendering", "path": "/Views/SearchPod.cshtml", "dataSources": [{ "type": "Search Pod Model", "name": "Search Pod", "path": "content/Home/Search Pod", "fields": [{ "name": "Departure: ", "type": "Single Line Text", "value": "Departure: " }, { "name": "Destination: ", "type": "Single Line Text", "value": "Destination: " }] }] }, { "name": "Flight Result", "type": "View Rendering", "path": "/Views/FlightResult.cshtml" }] }, { "name": "basket", "controls": [{ "name": "Search Pod Debug", "type": "View Rendering", "path": "/Views/SearchPodCriteriaDebug.cshtml" }, { "name": "Html Basket Text", "type": "View Rendering", "path": "/Views/Html.cshtml", "dataSources": [{ "type": "Basket Text", "name": "Basket Text", "path": "content/Home/Basket Text", "fields": [{ "name": "Body", "type": "Single Line Text", "value": "<p><strong>CMS Driven</strong> Sales Blurb<p>" }] }] }] }, { "name": "header", "controls": [] }, { "name": "footer", "controls": [{ "name": "Html Footer Text", "type": "View Rendering", "path": "/Views/Html.cshtml", "dataSources": [{ "type": "Footer Text", "name": "Footer Text", "path": "content/Home/Footer Text", "fields": [{ "name": "Body", "type": "Single Line Text", "value": "<p><strong>CMS Driven</strong> Footer Text<p>" }] }] }] }] }');

  fetchContent(contentId: string): Observable<Layout> {
    /*  if (this.settings.embedContent) {
        if (contentId == this.settings.defaultContentId) {
          return Observable.from([this._defaultContent]);
        }
        else if (contentId ==='FlightGrid'){
          return Observable.from([this._flightGrid]);
        }
        return Observable.throw('Content Not Embedded');
      }
      else {
      */
    let contentid = contentId;
    if (!contentid) contentid = this.settings.defaultContentId;
    let contentUrl = `${this.settings.contentUrl}${contentid}`;
    let control$ = this.http
      .get(contentUrl)
      .map(this.mapContent)
      .catch(this.handleError);
    return control$;
    //  }
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
