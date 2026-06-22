export type SearchResult = {
  vendorId: string;
  name: string;
  category: string;
  distanceMeters: number;
  rating: number;
  location: { lat: number; lng: number };
};
