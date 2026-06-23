import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  let fixture: ComponentFixture<VendorComponent>;
  let component: VendorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ChatService, useClass: MockChatService }],
    });

    component = TestBed.runInInjectionContext(() => new VendorComponent());
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.messages()).toEqual([{ sender: 'bot', text: 'Hola vendedor, dime cómo puedo ayudarte hoy.' }]);
  });
});
