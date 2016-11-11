import {PassengerMix} from './passenger-mix';

export class SearchCriteria {
  OneWay: Boolean;
  DepartureAirport: string;
  ArrivalAirport: string;
  DepartureDate: Date;
  ReturnDate: Date;
  Mix: PassengerMix = new PassengerMix();
}
