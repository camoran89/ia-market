import { ApiProperty } from '@nestjs/swagger';

export class AuthRegisterDto {
  @ApiProperty({ example: 'user@example.com' })
  email!: string;

  @ApiProperty({ example: 'secret' })
  password!: string;

  @ApiProperty({ example: 'buyer' })
  role!: 'buyer' | 'seller' | 'supervisor' | 'administrator';

  [key: string]: unknown;
}
