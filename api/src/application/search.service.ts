import { Inject, Injectable } from '@nestjs/common';
import { SearchPayload } from './types/search-payload.type.js';
import { SearchResponse } from './types/search-response.type.js';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';

@Injectable()
export class SearchService {
  constructor(@Inject(CatalogRepository) private readonly catalogRepository: CatalogRepository) {}

  async search(payload: SearchPayload): Promise<SearchResponse> {
    const query = payload?.query?.toString().trim() ?? '';
    const allItems = await this.catalogRepository.findAll();
    const results = allItems
      .filter(item =>
        query
          ? [item.name, item.description, item.category]
              .filter((field): field is string => Boolean(field))
              .some(field => field.toLowerCase().includes(query.toLowerCase()))
          : true
      )
      .map(item => ({
        vendorId: item.vendorId,
        name: item.name,
        category: item.category ?? 'General',
        distanceMeters: 0,
        rating: 4.5,
        location: { lat: 0, lng: 0 }
      }));

    return {
      query,
      results,
      metadata: {
        source: 'catalog-search',
        query,
        location: payload?.location ?? null
      }
    };
  }
}
