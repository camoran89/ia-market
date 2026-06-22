import { Body, Controller, Post } from '@nestjs/common';
import { ReceiptService } from '../../application/receipt.service.js';

@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post('validate')
  async validate(@Body() payload: unknown) {
    return this.receiptService.validateReceipt(payload);
  }
}
