import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SearchService } from '../../application/search.service.js';
import { SearchPayload } from '../../application/types/search-payload.type.js';

@Controller('search')
export class SearchController {
  constructor(@Inject(SearchService) private readonly searchService: SearchService) {}

  @Post()
  async executeSearch(@Body() payload: SearchPayload) {
    return this.searchService.search(payload);
  }
}
