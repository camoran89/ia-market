import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatService } from './chat.service';
import { ChatConversationStore } from './chat-conversation.store';

describe('ChatService integration', () => {
  let service: ChatService;
  let httpMock: HttpTestingController;
  let store: ChatConversationStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatService, ChatConversationStore],
    });

    service = TestBed.inject(ChatService);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(ChatConversationStore);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should post chat message and update conversation state', () => {
    service.sendMessage('hola').subscribe();

    const request = httpMock.expectOne('/api/chat/message');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ text: 'hola', role: 'buyer' });

    request.flush({ reply: 'Hola desde el backend' });

    expect(store.messages()).toEqual([
      { sender: 'user', text: 'hola' },
      { sender: 'bot', text: 'Hola desde el backend' }
    ]);
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();
  });

  it('should propagate error state when backend request fails', () => {
    service.sendMessage('hola').subscribe();

    const request = httpMock.expectOne('/api/chat/message');
    request.flush({ message: 'Server error' }, { status: 500, statusText: 'Server Error' });

    expect(store.loading()).toBe(false);
    expect(store.error()).toBe('Server error');
  });
});
