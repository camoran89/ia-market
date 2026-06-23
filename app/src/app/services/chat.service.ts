import { computed, Injectable, inject, signal } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Message } from '../features/common/chat/types/message.type';
import { ChatConversationStore } from './chat-conversation.store';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly apiUrl = '/api/chat/message';
  private readonly http = inject(HttpClient);
  readonly conversation = inject(ChatConversationStore);
  private readonly requestPayload = signal<{ text: string; role: 'buyer' | 'vendor'; vendorId?: string } | null>(null);
  readonly requestBody = computed(() => {
    const payload = this.requestPayload();
    return payload ? { text: payload.text, role: payload.role, vendorId: payload.vendorId } : null;
  });

  sendMessage(
    message: string,
    role: 'buyer' | 'vendor' = 'buyer',
    vendorId?: string,
  ): Observable<Message> {
    this.requestPayload.set({ text: message, role, vendorId });
    const userMessage: Message = { sender: 'user', text: message };
    this.conversation.appendMessage(userMessage);
    this.conversation.loading.set(true);
    this.conversation.error.set(null);

    const body = this.requestBody();
    if (!body) {
      this.conversation.loading.set(false);
      this.conversation.error.set('Unable to create request body');
      return EMPTY as Observable<Message>;
    }

    return this.http
      .post<{ reply: string }>(this.apiUrl, body)
      .pipe(
        map(response => ({ sender: 'bot' as const, text: response.reply })),
        tap(botMessage => this.conversation.appendMessage(botMessage)),
        catchError(error => {
          this.conversation.error.set(error?.message ?? 'Chat request failed');
          return EMPTY;
        }),
        finalize(() => this.conversation.loading.set(false)),
      );
  }

  clearConversation() {
    this.conversation.clearConversation();
    this.requestPayload.set(null);
  }
}
