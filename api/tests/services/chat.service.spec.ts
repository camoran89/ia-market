import { describe, expect, it } from 'vitest';
import { ChatService } from '../../src/application/chat.service.ts';
import { SearchService } from '../../src/application/search.service.ts';
import { ChatIntentService } from '../../src/application/chat-intent.service.ts';
import { ChatReplyService } from '../../src/application/chat-reply.service.ts';
import { SearchPayload } from '../../src/application/types/search-payload.type.ts';

class StubSearchService implements SearchService {
  async search(payload: SearchPayload) {
    const query = payload.query ?? '';

    return {
      query,
      results: [],
      metadata: {
        source: 'stub-search',
        query,
        location: payload.location ?? null
      }
    };
  }
}

describe('ChatService', () => {
  const chatService = new ChatService(
    new StubSearchService(),
    new ChatIntentService(),
    new ChatReplyService()
  );

  it('detects search intent and returns search results', async () => {
    const result = await chatService.processMessage({ text: 'quiero buscar un café' });

    expect(result.intent).toBe('search');
    expect(result.search).toBeDefined();
    expect(result.reply).toContain('He recibido tu mensaje');
  });

  it('returns chat fallback for non-search messages', async () => {
    const result = await chatService.processMessage({ text: 'hola' });

    expect(result.intent).toBe('chat');
    expect(result.search).toBeNull();
    expect(result.reply).toContain('Hola, cuéntame qué necesitas');
  });
});
