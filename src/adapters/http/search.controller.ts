import { Body, Controller, Post } from '@nestjs/common';
import { SearchService } from '../../application/search.service.js';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async executeSearch(@Body() payload: unknown) {
    return this.searchService.search(payload);
  }
}
