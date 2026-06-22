import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { VendorService } from '../../application/vendor.service.js';
import { CatalogItemDto } from './dto/catalog-item.dto.js';

@ApiTags('vendor')
@Controller('vendor')
export class VendorController {
  constructor(@Inject(VendorService) private readonly vendorService: VendorService) {}

  @Post(':vendorId/catalog')
  @ApiBody({ type: [CatalogItemDto] })
  async publishCatalog(@Param('vendorId') vendorId: string, @Body() items: CatalogItemDto[]) {
    return this.vendorService.publishCatalogItems(vendorId, items as any);
  }

  @Get(':vendorId/catalog')
  async getCatalog(@Param('vendorId') vendorId: string) {
    return this.vendorService.listCatalog(vendorId);
  }

  @Post(':vendorId/subscription')
  @ApiBody({ type: Object })
  async registerSubscription(@Param('vendorId') vendorId: string, @Body() payload: { plan: string }) {
    return this.vendorService.registerSubscription({ vendorId, plan: payload.plan });
  }
}
