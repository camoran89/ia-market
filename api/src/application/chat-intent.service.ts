import { Injectable } from '@nestjs/common';
import { ChatIntent } from './types/chat-intent.type.js';

@Injectable()
export class ChatIntentService {
  private readonly searchKeywords = ['buscar', 'necesito', 'quiero', 'producto', 'servicio', 'encuentra', 'dónde hay'];
  private readonly orderKeywords = ['pedido', 'orden', 'comprar', 'pide', 'ordena'];
  private readonly greetingKeywords = ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'qué tal'];

  detectIntent(text: string): ChatIntent {
    const normalized = text.toLowerCase().trim();

    if (this.greetingKeywords.some(keyword => normalized.startsWith(keyword))) {
      return 'greeting';
    }

    if (this.searchKeywords.some(keyword => normalized.includes(keyword))) {
      return 'search';
    }

    if (this.orderKeywords.some(keyword => normalized.includes(keyword))) {
      return 'order';
    }

    return 'chat';
  }
}
