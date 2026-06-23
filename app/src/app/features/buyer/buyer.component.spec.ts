import { render, screen } from '@testing-library/angular';
import { BuyerComponent } from './buyer.component';
import { ChatService } from '../../services/chat.service.js';

class MockChatService {
  readonly conversation = {
    messagesSignal: () => [{ sender: 'bot', text: 'Welcome! How can I help you find today?' }],
    loading: () => false,
    error: () => null,
  };
  sendMessage() {
    return {
      subscribe: () => {},
    };
  }
}

describe('BuyerComponent', () => {
  it('should render the chat input', async () => {
    await render(BuyerComponent, {
      providers: [{ provide: ChatService, useClass: MockChatService }],
    });

    expect(screen.getByPlaceholderText('Type your message...')).toBeTruthy();
  });
});
