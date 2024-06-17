export default interface Apartment {
  id?: number;
  name: string;
  propertyId: number;
  area: number;
  bedroomCount: number;
  bathroomCount: number;
  hasGarage: boolean;
  hasServiceArea: boolean;
  hasBalcony: boolean;
  hasBarbecueGrill: boolean;
  hasCloset: boolean;
}
