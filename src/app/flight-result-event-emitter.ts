import {Subject} from 'rxjs/Subject';
import { IFlightResult } from './iflight-result'

export class FlightResultEventEmitter extends Subject<IFlightResult[]> {
  emit(value) {
        super.next(value);
  }
}
