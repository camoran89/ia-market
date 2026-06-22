import { Injectable } from '@nestjs/common';
import { ChatIntent } from './types/chat-intent.type.js';

@Injectable()
export class ChatReplyService {
  buildReply(intent: ChatIntent, text: string): string {
    switch (intent) {
      case 'greeting':
        return '¡Hola! Soy tu asistente de compras. ¿Qué necesitas encontrar hoy?';
      case 'search':
        return `Entendido. Buscando resultados para "${text}"...`;
      case 'order':
        return `Perfecto, empecemos con tu pedido. ¿Qué producto o servicio te gustaría ordenar?`;
      case 'chat':
      default:
        return 'No he entendido bien. ¿Puedes reformular tu pregunta? Puedes pedirme que busque productos o que te ayude con un pedido.';
    }
  }
}
