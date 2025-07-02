export interface Listing {
  id: number;
  beds: number;
  baths: number;
  area: number;
  street_nr: string;
  street: string;
  city: string;
  code: string;
  price: number;
}

export interface ListingFilters {
  priceFrom: number | null;
  priceTo: number | null;
  beds: string | null;
  baths: string | null;
  areaFrom: number | null;
  areaTo: number | null;
}
