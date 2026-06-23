import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  let fixture: ComponentFixture<BuyerComponent>;
  let component: BuyerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ChatService, useClass: MockChatService }],
    });

    component = TestBed.runInInjectionContext(() => new BuyerComponent());
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.messages()).toEqual([{ sender: 'bot', text: 'Welcome! How can I help you find today?' }]);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.messages()).toEqual([{ sender: 'bot', text: 'Welcome! How can I help you find today?' }]);
  });
});
