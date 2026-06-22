import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  async processMessage(payload: unknown) {
    return { message: 'Processed', payload };
  }
}
