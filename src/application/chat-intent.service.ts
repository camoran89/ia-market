import { ChatIntent } from './types/chat-intent.type.js';

export class ChatIntentService {
  detectIntent(text: string): ChatIntent {
    const normalized = text.toLowerCase();

    if (normalized.includes('buscar') || normalized.includes('quiero') || normalized.includes('producto')) {
      return 'search';
    }

    if (normalized.includes('pedido') || normalized.includes('orden')) {
      return 'order';
    }

    return 'chat';
  }
}
