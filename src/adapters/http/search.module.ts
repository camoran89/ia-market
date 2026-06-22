import { Module } from '@nestjs/common';
import { SearchController } from './search.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [SearchController]
})
export class SearchModule {}
