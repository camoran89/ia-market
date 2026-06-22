import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { SellerService } from '../../application/seller.service.js';

@Controller('seller')
export class SellerController {
  constructor(@Inject(SellerService) private readonly sellerService: SellerService) {}

  @Post('catalog')
  async updateCatalog(@Body() payload: unknown) {
    return this.sellerService.updateCatalog(payload);
  }

  @Get('orders')
  async getOrders(@Query('vendorId') vendorId: string) {
    return this.sellerService.listOrders(vendorId);
  }
}
