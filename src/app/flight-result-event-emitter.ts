import {Subject} from 'rxjs/Subject';
import { FlightResult } from './flight-result.interface'

export class FlightResultEventEmitter extends Subject<FlightResult[]> {
  emit(value) {
        super.next(value);
  }
}
