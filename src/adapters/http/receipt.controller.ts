import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ReceiptService } from '../../application/receipt.service.js';
import { ReceiptPayload } from '../../application/types/receipt-payload.type.js';

@Controller('receipt')
export class ReceiptController {
  constructor(@Inject(ReceiptService) private readonly receiptService: ReceiptService) {}

  @Post('validate')
  async validate(@Body() payload: ReceiptPayload) {
    return this.receiptService.validateReceipt(payload);
  }
}
