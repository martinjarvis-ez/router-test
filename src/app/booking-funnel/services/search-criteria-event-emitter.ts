import {Subject} from 'rxjs/Subject';
import { SearchCriteria } from '../models/search-criteria'

export class SearchCriteriaEventEmitter extends Subject<SearchCriteria> {
  emit(value) {
        super.next(value);
  }
}
