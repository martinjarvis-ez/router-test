import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import * as cloneDeep from "lodash/cloneDeep";

import { SearchCriteria } from '../../models/index';
import { SearchService } from '../../services/index';

import { DrawerView } from '../../../core/index';

@Component({
  selector: 'recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesDrawerComponent extends DrawerView implements OnInit, OnDestroy, AfterViewInit {

  private _subs: Subscription[] = [];
  private _recentSearches: SearchCriteria[] = [];
  private _readyToShow: boolean = false;
  selectedSearch = new Subject();

  constructor(private search: SearchService) { super(); }

  ngOnInit() {
    this._subs.push(this.search.RecentSearchStream.subscribe((recent: SearchCriteria[]) => {
      this._recentSearches = recent;
      this.showIfReady();
    }
    ));
  }

  ngOnDestroy() {
    for (let sub of this._subs) {
      sub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._readyToShow = true;
      this.showIfReady();
    }
    );
  }


  private showIfReady() {
    if (this._recentSearches && this._readyToShow) {
      this.show();
    }
  }

  get recentSearches(): SearchCriteria[] {
    return this._recentSearches;
  }

  selectRecent(search: SearchCriteria) {
    this.selectedSearch.next(cloneDeep(search));
    this.close();
  }
}
