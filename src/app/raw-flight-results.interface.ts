
export interface FlightNumber {
  CarrierCode: string;
  Number: number;
}

export interface SegmentId {
  Date: Date;
  OriginIata: string;
  DestinationIata: string;
  FlightNumber: number;
}


export interface Price {
  Value: number;
  ValueWithDebitCard: number;
  ValueWithCreditCard: number;
}

export interface Prices {
  Adult: Price;
  Child: Price;
  Infant: Price;
}

export interface FlightFare {
  FareType: number;
  SeatsAvailable: number;
  IsMissingPrices: boolean;
  Prices: Prices;
  IsLowestFare: boolean;
  FareClass: number;
}

export interface FlightSummary {
  FlightIdentification: string;
  FlightNumber: FlightNumber;
  SegmentId: SegmentId;
  DepartureIata: string;
  ArrivalIata: string;
  DepTerminalName: string;
  ArrTerminalName: string;
  LocalDepartureTime: Date;
  LocalArrivalTime: Date;
  IsDisrupted: boolean;
  IsReturn: boolean;
  FlightFares: FlightFare[];
  IsPromotionalFare: boolean;
  ApdTaxAmount: number;
  IsSoldOut: boolean;
  DisplayCurrencyCode?: any;
  IsUnavailable: boolean;
  RouteType: number;
}

export interface RawResults {
  Flights: FlightSummary[];
}
