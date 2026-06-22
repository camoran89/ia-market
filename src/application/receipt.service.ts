import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceiptService {
  async validateReceipt(payload: unknown) {
    return { valid: true, payload };
  }
}
