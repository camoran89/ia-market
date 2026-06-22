import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller.js';
import { ApplicationModule } from '../../application/application.module.js';

@Module({
  imports: [ApplicationModule],
  controllers: [ChatController]
})
export class ChatModule {}
