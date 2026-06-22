import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [AdminController]
})
export class AdminModule {}
