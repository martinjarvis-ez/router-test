
export interface DisplayUnit {
  UnitName: string;
  Abbreviation: string;
  MetersPerUnit: number;
}

export interface NearbyAirportSettings {
  DistanceToSearchKm: number;
  DisplayUnit: DisplayUnit;
  NearbyNumberToShow: number;
}

export interface NearbyAirport {
  Iata: string;
  DistanceKm: number;
}

export interface Airport {
  Iata: string;
  Name: string;
  B2bAreaCode: string;
  Connections: string[];
  NearbyAirports: NearbyAirport[];
  IsMarketGroup: boolean;
  MarketGroupIatas: string[];
  Flags: string[];
}

export interface Country {
  Code: string;
  Name: string;
  Airports: string[];
}

export interface AirportsResult {
  NearbyAirportSettings: NearbyAirportSettings;
  Airports: Airport[];
  Countries: Country[];
}
