export interface FlightNumber {
      carrierCode: string;
      number: number;
  }

  export interface SegmentId {
      date: Date;
      originIata: string;
      destinationIata: string;
      flightNumber: number;
  }

  export interface Price {
      value: number;
      valueWithDebitCard: number;
      valueWithCreditCard: number;
  }

  export interface Prices {
      adult: Price;
      child: Price;
      infant: Price;
  }

  export interface FlightFare {
      fareType: number;
      seatsAvailable: number;
      isMissingPrices: boolean;
      prices: Prices;
      isLowestFare: boolean;
      fareClass: number;
  }

  export interface FlightSummary {
      flightIdentification: string;
      flightNumber: FlightNumber;
      segmentId: SegmentId;
      departureIata: string;
      arrivalIata: string;
      depTerminalName: string;
      arrTerminalName: string;
      localDepartureTime: Date;
      localArrivalTime: Date;
      isDisrupted: boolean;
      isReturn: boolean;
      flightFares: FlightFare[];
      isPromotionalFare: boolean;
      apdTaxAmount: number;
      isSoldOut: boolean;
      displayCurrencyCode?: any;
      isUnavailable: boolean;
      routeType: number;
  }

  export interface RawResults {
      flights: FlightSummary[];
  }
