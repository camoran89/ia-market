import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [VendorController]
})
export class VendorModule {}
