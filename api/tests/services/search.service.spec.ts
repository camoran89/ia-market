import { describe, expect, it } from 'vitest';
import { SearchService } from '../../src/application/search.service.js';

describe('SearchService', () => {
  const searchService = new SearchService();

  it('returns search response with results', async () => {
    const result = await searchService.search({ query: 'cafe' });

    expect(result.query).toBe('cafe');
    expect(Array.isArray(result.results)).toBe(true);
    expect(result.metadata.source).toBe('demo-search-engine');
  });
});
