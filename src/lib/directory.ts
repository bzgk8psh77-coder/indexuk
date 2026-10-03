import listings from "./directory-data.json";

export type Listing = {
  id: string;
  fhrsId: number;
  name: string;
  category: string;
  sector: "places-to-eat";
  city: string;
  nation: string;
  address: string;
  postcode: string;
  phone: string;
  hygiene: string;
  hygieneScheme: "FHRS" | "FHIS";
  hygieneDate: string;
  summary: string;
  sourceUrl: string;
  collected: string;
};

export const directoryListings = listings as Listing[];

export const DIRECTORY_CITIES = ["London", "Manchester", "Edinburgh", "Cardiff", "Belfast"] as const;

export function getListing(id: string): Listing | undefined {
  return directoryListings.find((listing) => listing.id === id);
}

export function listingsIn(city: string): Listing[] {
  if (!city || city === "All") return directoryListings;
  return directoryListings.filter((listing) => listing.city === city);
}
