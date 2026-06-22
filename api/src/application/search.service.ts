import { Injectable } from '@nestjs/common';
import { SearchPayload } from './types/search-payload.type.js';
import { SearchResponse } from './types/search-response.type.js';

@Injectable()
export class SearchService {
  async search(payload: SearchPayload): Promise<SearchResponse> {
    const query = payload?.query?.toString() ?? '';
    return {
      query,
      results: [
        {
          vendorId: 'vendor-123',
          name: 'Cafetería Central',
          category: 'Alimentos',
          distanceMeters: 420,
          rating: 4.8,
          location: { lat: -34.6005, lng: -58.3816 }
        },
        {
          vendorId: 'vendor-456',
          name: 'Panadería La Esquina',
          category: 'Panadería',
          distanceMeters: 760,
          rating: 4.6,
          location: { lat: -34.6021, lng: -58.3823 }
        }
      ],
      metadata: {
        source: 'demo-search-engine',
        query,
        location: payload?.location ?? null
      }
    };
  }
}
