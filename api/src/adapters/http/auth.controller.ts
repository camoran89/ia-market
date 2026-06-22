import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../application/auth.service.js';
import { AuthLoginDto } from './dto/auth-login.dto.js';
import { AuthRegisterDto } from './dto/auth-register.dto.js';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: AuthLoginDto })
  async login(@Body() payload: AuthLoginDto) {
    return this.authService.authenticate(payload);
  }

  @Post('register')
  @ApiBody({ type: AuthRegisterDto })
  async register(@Body() payload: AuthRegisterDto) {
    return this.authService.register(payload as any);
  }
}
