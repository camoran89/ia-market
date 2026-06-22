export type ReceiptValidationResult = {
  valid: boolean;
  reason: string;
  details: {
    filename: string;
    contentType: string;
    sizeBytes: number;
    isMimeValid: boolean;
    isExtensionValid: boolean;
    isSizeValid: boolean;
  };
};
