import { Injectable } from '@angular/core';
import {LocalStorageService } from 'ng2-webstorage';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SearchCriteria } from '../models/index'

@Injectable()
export class SearchService {
  Stream: BehaviorSubject<SearchCriteria>;
  RecentSearchStream: BehaviorSubject<SearchCriteria[]>;

  private _recentSearchKey: string = 'recent-search-cache';
  private _recentSearches: SearchCriteria[];

  constructor(private storage: LocalStorageService) {
    this._recentSearches = this.storage.retrieve(this._recentSearchKey) || [];

    let latest: SearchCriteria = null;
    if (this._recentSearches && this._recentSearches.length > 0) {
      latest = this._recentSearches[0];
    }
    this.RecentSearchStream = new BehaviorSubject<SearchCriteria[]>(this._recentSearches);
    this.Stream = new BehaviorSubject<SearchCriteria>(latest);
    this.storage.observe(this._recentSearchKey).subscribe((data: SearchCriteria[]) => this.broadcastSearch(data));
  }

  performSearch(criteria: SearchCriteria) {
    let recent = this._recentSearches;
    recent.unshift(criteria);
    this._recentSearches = recent.slice(0, 5); // filter so not duplicate?
    this.storage.store(this._recentSearchKey, this._recentSearches);
  }

  private broadcastSearch(data: SearchCriteria[]) {
    if (data != null && data.length > 0 && this.Stream != null) {
      this._recentSearches = data;
      let latest = data[0];
      if (latest.DepartureAirport != null && latest.ArrivalAirport != null) { // should have validation service
        this.Stream.next(data[0]);
      }
      this.RecentSearchStream.next(data);
    }
  }
}
