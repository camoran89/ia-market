import { Inject, Injectable } from '@nestjs/common';
import { SearchService } from './search.service.js';
import { ChatIntentService } from './chat-intent.service.js';
import { ChatReplyService } from './chat-reply.service.js';
import { ChatIntent } from './types/chat-intent.type.js';
import { SearchResponse } from './types/search-response.type.js';

@Injectable()
export class ChatService {
  constructor(
    @Inject(SearchService) private readonly searchService: SearchService,
    @Inject(ChatIntentService) private readonly chatIntentService: ChatIntentService,
    @Inject(ChatReplyService) private readonly chatReplyService: ChatReplyService
  ) {}

  async processMessage(payload: unknown) {
    const text = typeof payload === 'object' && payload !== null && 'text' in payload
      ? String((payload as Record<string, unknown>).text)
      : '';

    const intent: ChatIntent = this.chatIntentService.detectIntent(text);
    const searchResults: SearchResponse | null = intent === 'search'
      ? await this.searchService.search({ query: text })
      : null;

    return {
      intent,
      reply: this.chatReplyService.buildReply(intent, text),
      map: searchResults?.results ?? [],
      search: searchResults
    };
  }
}
