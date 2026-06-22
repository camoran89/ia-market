import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ChatService } from '../../application/chat.service.js';

@Controller('chat')
export class ChatController {
  constructor(@Inject(ChatService) private readonly chatService: ChatService) {}

  @Post('message')
  async processMessage(@Body() payload: unknown) {
    return this.chatService.processMessage(payload);
  }
}
