import { SearchResult } from './search-result.type.js';

export type SearchResponse = {
  query: string;
  results: SearchResult[];
  metadata: { source: string; query: string; location: { lat: number; lng: number } | null };
};
