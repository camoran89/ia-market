import { Injectable } from '@nestjs/common';
import { ReceiptPayload } from './types/receipt-payload.type.js';
import { ReceiptValidationResult } from './types/receipt-validation-result.type.js';
import { ALLOWED_RECEIPT_MIME_TYPES } from './constants/receipt-validation-mime-types.constant.js';
import { ALLOWED_RECEIPT_EXTENSIONS } from './constants/receipt-validation-extensions.constant.js';
import { MAX_RECEIPT_SIZE_BYTES } from './constants/receipt-validation-max-size.constant.js';

@Injectable()
export class ReceiptService {
  async validateReceipt(payload: ReceiptPayload): Promise<ReceiptValidationResult> {
    const filename = payload?.filename ?? '';
    const contentType = payload?.contentType ?? '';
    const extension = filename.split('.').pop()?.toLowerCase() ?? '';
    const isMimeValid = ALLOWED_RECEIPT_MIME_TYPES.includes(contentType);
    const isExtensionValid = ALLOWED_RECEIPT_EXTENSIONS.includes(extension);
    const isSizeValid = (payload?.sizeBytes ?? 0) > 0 && (payload?.sizeBytes ?? 0) < MAX_RECEIPT_SIZE_BYTES;
    const valid = isMimeValid && isExtensionValid && isSizeValid;

    return {
      valid,
      reason: valid ? 'Receipt accepted' : 'Receipt invalid. Verifique el formato y el tamaño del archivo.',
      details: {
        filename,
        contentType,
        sizeBytes: payload?.sizeBytes ?? 0,
        isMimeValid,
        isExtensionValid,
        isSizeValid
      }
    };
  }
}
