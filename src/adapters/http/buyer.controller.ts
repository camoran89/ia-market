import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { BuyerService } from '../../application/buyer.service.js';
import { OrderEntity } from '../../domain/entities/order.entity.js';

@Controller('buyer')
export class BuyerController {
  constructor(@Inject(BuyerService) private readonly buyerService: BuyerService) {}

  @Get('transactions')
  async getTransactions(@Query('userId') userId: string) {
    return this.buyerService.listTransactions(userId);
  }

  @Post('order')
  async createOrder(@Body() payload: OrderEntity) {
    return this.buyerService.createOrder(payload);
  }
}
