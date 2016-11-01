import { IFlight } from './iflight';

export interface IFlightResult {
  Date: Date;
  DepartureAirport:string;
  ArrivalAirport:string;
  Flights: IFlight[];
}
