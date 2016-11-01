import {Subject} from 'rxjs/Subject';
import { SearchCriteria } from './search-criteria'

export class SearchCriteriaEventEmitter extends Subject<SearchCriteria> {
  emit(value) {
        super.next(value);
  }
}
