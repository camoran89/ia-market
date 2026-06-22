import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [AuthController]
})
export class AuthModule {}
