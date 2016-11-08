import {Subject} from 'rxjs/Subject';
import { FlightResult } from '../models/flight-result.interface'

export class FlightResultEventEmitter extends Subject<FlightResult[]> {
  emit(value: FlightResult[]) {
        super.next(value);
  }
}
