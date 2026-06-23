import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Batería para carro' })
  name!: string;

  @ApiProperty({ example: 'Batería de 12V con instalación incluida' })
  description!: string;

  @ApiProperty({ example: 250000 })
  price!: number;

  @ApiProperty({ example: 'Electrónica' })
  category!: string;

  @ApiProperty({ example: 10 })
  stock!: number;

  @ApiPropertyOptional({ example: 'https://example.com/battery.jpg' })
  imageUrl?: string;
}
