import { ApiProperty } from '@nestjs/swagger';
import { OrderItemDto } from './order-item.dto.js';

export class OrderCreateDto {
  @ApiProperty({ example: 'user-1' })
  userId!: string;

  @ApiProperty({ example: 'vendor-1' })
  vendorId!: string;

  @ApiProperty({ type: [OrderItemDto] })
  items!: OrderItemDto[];

  @ApiProperty({ example: 39.99 })
  totalAmount!: number;
}
