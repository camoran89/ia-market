import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../application/auth.service.js';
import { UserCredentials } from '../../domain/value-objects/user-credentials.type.js';
import { UserEntity } from '../../domain/entities/user.entity.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: UserCredentials) {
    return this.authService.authenticate(payload);
  }

  @Post('register')
  async register(@Body() payload: UserEntity) {
    return this.authService.register(payload);
  }
}
