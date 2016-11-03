import { Flight } from './flight.interface';

export interface FlightResult {
  Date: Date;
  DepartureAirport:string;
  ArrivalAirport:string;
  Flights: Flight[];
}
