import { TestBed } from '@angular/core/testing';
import { ChatConversationStore } from './chat-conversation.store';

describe('ChatConversationStore', () => {
  let store: ChatConversationStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatConversationStore],
    });

    store = TestBed.inject(ChatConversationStore);
  });

  it('should initialize with empty messages and no error', () => {
    expect(store.messages()).toEqual([]);
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();
  });

  it('should append messages', () => {
    store.appendMessage({ sender: 'user', text: 'hello' });
    expect(store.messages()).toEqual([{ sender: 'user', text: 'hello' }]);
  });

  it('should clear conversation', () => {
    store.appendMessage({ sender: 'user', text: 'hello' });
    store.clearConversation();
    expect(store.messages()).toEqual([]);
    expect(store.error()).toBeNull();
  });
});
