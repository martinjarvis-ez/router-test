import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchCriteriaEventEmitter } from './search-criteria-event-emitter';
import { SearchCriteria } from '../models/search-criteria'

@Injectable()
export class SearchService {
  Stream : SearchCriteriaEventEmitter;
  private subscription: Subscription;

  constructor() {
      this.Stream = new SearchCriteriaEventEmitter();
      this.subscription = this.Stream.subscribe(criteria => this.persistSearch(criteria));
   }

   persistSearch(criteria: SearchCriteria){
      let recent = this.recentSearches;
      recent.unshift(criteria);
      this.recentSearches = recent.slice(0,4);
   }

   recentSearches:SearchCriteria[] = [];

}
