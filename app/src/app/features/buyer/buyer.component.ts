import { Component, inject } from '@angular/core';
import { ChatWindowComponent } from '../common/chat/chat-window.component.js';
import { ChatService } from '../../services/chat.service.js';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
  standalone: true,
  imports: [ChatWindowComponent],
})
export class BuyerComponent {
  readonly chatService = inject(ChatService);
  readonly messages = this.chatService.conversation.messagesSignal;

  handleMessage(messageText: string) {
    this.chatService.sendMessage(messageText).subscribe();
  }
}