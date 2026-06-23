import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Message } from '../features/common/chat/types/message.type';

@Injectable({
  providedIn: 'root',
})
export class ChatConversationStore {
  readonly messages: WritableSignal<Message[]> = signal([]);
  readonly loading: WritableSignal<boolean> = signal(false);
  readonly error: WritableSignal<string | null> = signal(null);

  clearConversation() {
    this.messages.set([]);
    this.error.set(null);
  }

  get messagesSignal(): Signal<Message[]> {
    return this.messages;
  }

  appendMessage(message: Message) {
    this.messages.update(current => [...current, message]);
  }
}
