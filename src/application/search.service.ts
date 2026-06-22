import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  async search(query: unknown) {
    return { query, results: [] };
  }
}
