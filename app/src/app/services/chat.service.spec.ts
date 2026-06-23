import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatService } from './chat.service';
import { ChatConversationStore } from './chat-conversation.store';

describe('ChatService', () => {
  let service: ChatService;
  let httpMock: HttpTestingController;
  let store: ChatConversationStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatService],
    });

    service = TestBed.inject(ChatService);
    httpMock = TestBed.inject(HttpTestingController);
    store = TestBed.inject(ChatConversationStore);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should append user and bot messages when sendMessage succeeds', () => {
    const message = 'hello';
    let botResponse: any = null;

    service.sendMessage(message).subscribe(value => {
      botResponse = value;
    });

    const request = httpMock.expectOne('/api/chat');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ text: message, role: 'buyer' });

    request.flush({ reply: 'Hola vendedor' });

    expect(botResponse).toEqual({ sender: 'bot', text: 'Hola vendedor' });
    expect(store.messages()).toEqual([
      { sender: 'user', text: message },
      { sender: 'bot', text: 'Hola vendedor' },
    ]);
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();
  });

  it('should set an error when sendMessage fails', () => {
    service.sendMessage('hello').subscribe();

    const request = httpMock.expectOne('/api/chat');
    request.flush({ message: 'Server failure' }, { status: 500, statusText: 'Server Error' });

    expect(store.loading()).toBe(false);
    expect(store.error()).toBeTruthy();
  });
});
