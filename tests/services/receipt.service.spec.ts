import { describe, expect, it } from 'vitest';
import { ReceiptService } from '../../src/application/receipt.service.js';

describe('ReceiptService', () => {
  const receiptService = new ReceiptService();

  it('accepts a valid receipt payload', async () => {
    const result = await receiptService.validateReceipt({
      filename: 'comprobante.pdf',
      contentType: 'application/pdf',
      sizeBytes: 1024
    });

    expect(result.valid).toBe(true);
    expect(result.details.isMimeValid).toBe(true);
    expect(result.details.isExtensionValid).toBe(true);
    expect(result.details.isSizeValid).toBe(true);
  });

  it('rejects an invalid receipt payload with wrong mime type and extension', async () => {
    const result = await receiptService.validateReceipt({
      filename: 'comprobante.txt',
      contentType: 'text/plain',
      sizeBytes: 1024
    });

    expect(result.valid).toBe(false);
    expect(result.details.isMimeValid).toBe(false);
    expect(result.details.isExtensionValid).toBe(false);
  });
});
