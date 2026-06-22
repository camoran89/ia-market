import { Component, inject, signal } from '@angular/core';
import { ChatWindowComponent } from '../common/chat/chat-window.component.js';
import { Message } from '../common/chat/types/message.type.js';
import { ChatService } from '../../services/chat.service.js';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
  standalone: true,
  imports: [ChatWindowComponent],
})
export class BuyerComponent {
  private chatService = inject(ChatService);
  messages = signal<Message[]>([
    { sender: 'bot', text: 'Welcome! How can I help you find today?' }
  ]);

  handleMessage(messageText: string) {
    this.messages.update(currentMessages => [
      ...currentMessages,
      { sender: 'user', text: messageText }
    ]);

    this.chatService.sendMessage(messageText).subscribe(botResponse => {
      this.messages.update(currentMessages => [
        ...currentMessages,
        botResponse
      ]);
    });
  }
}