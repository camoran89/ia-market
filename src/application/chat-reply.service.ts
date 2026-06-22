import { ChatIntent } from './types/chat-intent.type.js';

export class ChatReplyService {
  buildReply(intent: ChatIntent, text: string) {
    if (intent === 'search') {
      return text
        ? `He recibido tu mensaje: "${text}". Estoy buscando opciones cercanas...`
        : 'Hola, cuéntame qué necesitas y te ayudo a encontrar opciones cercanas.';
    }

    if (intent === 'order') {
      return `Perfecto, he registrado tu intención de crear un pedido. ¿Puedes darme más detalles?`;
    }

    return 'Hola, cuéntame qué necesitas y te ayudo a encontrar opciones cercanas.';
  }
}
