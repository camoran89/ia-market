import { render, screen } from '@testing-library/angular';
import { VendorComponent } from './vendor.component.js';
import { ChatService } from '../../services/chat.service.js';

class MockChatService {
  readonly conversation = {
    messagesSignal: () => [{ sender: 'bot', text: 'Hola vendedor, dime cómo puedo ayudarte hoy.' }],
    loading: () => false,
    error: () => null,
  };
  sendMessage() {
    return {
      subscribe: () => {},
    };
  }
}

describe('VendorComponent', () => {
  it('should render subscribe button', async () => {
    await render(VendorComponent, {
      providers: [{ provide: ChatService, useClass: MockChatService }],
    });

    expect(screen.getByText('Registrar suscripción')).toBeTruthy();
  });
});
