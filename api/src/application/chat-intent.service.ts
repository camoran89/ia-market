import { Injectable } from '@nestjs/common';
import { ChatIntent } from './types/chat-intent.type.js';

@Injectable()
export class ChatIntentService {
  private readonly buyerSearchKeywords = ['buscar', 'necesito', 'quiero', 'producto', 'servicio', 'encuentra', 'dónde hay'];
  private readonly buyerOrderKeywords = ['pedido', 'orden', 'comprar', 'pide', 'ordena'];
  private readonly vendorProductKeywords = ['agrega', 'crear producto', 'nuevo producto', 'publica', 'catálogo', 'catalogo'];
  private readonly vendorSubscriptionKeywords = ['suscripción', 'suscripcion', 'plan', 'activar', 'renovar'];
  private readonly greetingKeywords = ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'qué tal'];

  detectIntent(text: string, role: 'buyer' | 'vendor'): ChatIntent {
    const normalized = text.toLowerCase().trim();

    if (this.greetingKeywords.some(keyword => normalized.startsWith(keyword))) {
      return 'greeting';
    }

    if (role === 'vendor') {
      if (this.vendorProductKeywords.some(keyword => normalized.includes(keyword))) {
        return 'vendorAction';
      }
      if (this.vendorSubscriptionKeywords.some(keyword => normalized.includes(keyword))) {
        return 'vendorAction';
      }
    }

    if (role === 'buyer') {
      if (this.buyerSearchKeywords.some(keyword => normalized.includes(keyword))) {
        return 'search';
      }

      if (this.buyerOrderKeywords.some(keyword => normalized.includes(keyword))) {
        return 'order';
      }
    }

    return 'chat';
  }
}
