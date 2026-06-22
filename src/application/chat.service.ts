import { Injectable } from '@nestjs/common';
import { SearchService } from './search.service.js';

@Injectable()
export class ChatService {
  constructor(private readonly searchService: SearchService) {}

  async processMessage(payload: unknown) {
    const text = typeof payload === 'object' && payload !== null && 'text' in payload
      ? String((payload as Record<string, unknown>).text)
      : '';

    const intent = this.detectIntent(text);
    const searchResults = intent === 'search'
      ? await this.searchService.search({ query: text })
      : null;

    return {
      intent,
      reply: text
        ? `He recibido tu mensaje: "${text}". Estoy buscando opciones cercanas...`
        : 'Hola, cuéntame qué necesitas y te ayudo a encontrar opciones cercanas.',
      map: searchResults?.results ?? [],
      search: searchResults
    };
  }

  private detectIntent(text: string) {
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
