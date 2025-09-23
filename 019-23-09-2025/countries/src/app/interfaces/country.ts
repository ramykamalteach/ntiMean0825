// src/app/interfaces/country.ts
export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Record<string, Gender>;
  cca3: string;
  translations: Record<string, Translation>;
  flag: string;
  maps: Maps;
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flag;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

// ---------- Sub-interfaces ----------

export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Gender {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flag {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}

