import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BuyerService } from '../../application/buyer.service.js';
import { OrderCreateDto } from './dto/order-create.dto.js';

@ApiTags('buyer')
@Controller('buyer')
export class BuyerController {
  constructor(@Inject(BuyerService) private readonly buyerService: BuyerService) {}

  @Get('transactions')
  async getTransactions(@Query('userId') userId: string) {
    return this.buyerService.listTransactions(userId);
  }

  @Post('order')
  @ApiBody({ type: OrderCreateDto })
  async createOrder(@Body() payload: OrderCreateDto) {
    return this.buyerService.createOrder(payload as any);
  }
}
