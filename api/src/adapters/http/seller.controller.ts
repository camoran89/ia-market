import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SellerService } from '../../application/seller.service.js';
import { SellerCatalogUpdateDto } from './dto/seller-catalog-update.dto.js';

@ApiTags('seller')
@Controller('seller')
export class SellerController {
  constructor(@Inject(SellerService) private readonly sellerService: SellerService) {}

  @Post('catalog')
  @ApiBody({ type: SellerCatalogUpdateDto })
  async updateCatalog(@Body() payload: SellerCatalogUpdateDto) {
    return this.sellerService.updateCatalog(payload);
  }

  @Get('orders')
  async getOrders(@Query('vendorId') vendorId: string) {
    return this.sellerService.listOrders(vendorId);
  }
}
