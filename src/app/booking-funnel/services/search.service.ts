import { Injectable } from '@angular/core';
import { SearchCriteriaEventEmitter } from './search-criteria-event-emitter';

@Injectable()
export class SearchService {
  Stream : SearchCriteriaEventEmitter;

  constructor() {
      this.Stream = new SearchCriteriaEventEmitter();
   }

}
