import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CatalogItemDto {
  @ApiProperty({ example: 'Café Premium' })
  name!: string;

  @ApiProperty({ example: 'Café de origen colombiano, tostado medio.' })
  description!: string;

  @ApiProperty({ example: 18.5 })
  price!: number;

  @ApiProperty({ example: true })
  available!: boolean;

  @ApiPropertyOptional({ example: 'https://example.com/coffee.jpg' })
  imageUrl?: string;

  @ApiPropertyOptional({ example: 'Alimentos' })
  category?: string;
}
