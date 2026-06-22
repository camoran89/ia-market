import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from '../../application/chat.service.js';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  async processMessage(@Body() payload: unknown) {
    return this.chatService.processMessage(payload);
  }
}
