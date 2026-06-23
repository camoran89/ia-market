import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from './types/message.type.js';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent {
  messages = input.required<Message[]>();
  loading = input<boolean>();
  error = input<string | null>();
  messageSent = output<string>();
  
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageSent.emit(this.newMessage);
      this.newMessage = '';
    }
  }
}