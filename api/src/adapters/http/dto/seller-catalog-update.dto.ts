import { ApiProperty } from '@nestjs/swagger';
import { CatalogItemDto } from './catalog-item.dto.js';

export class SellerCatalogUpdateDto {
  @ApiProperty({ example: 'vendor-1' })
  vendorId!: string;

  @ApiProperty({ type: [CatalogItemDto] })
  items!: CatalogItemDto[];
}
