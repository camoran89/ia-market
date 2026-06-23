import { Inject, Injectable } from '@nestjs/common';
import { SearchService } from './search.service.js';
import { ChatIntentService } from './chat-intent.service.js';
import { ChatReplyService } from './chat-reply.service.js';
import { ChatIntent } from './types/chat-intent.type.js';
import { SearchResponse } from './types/search-response.type.js';
import { normalizeVendorChatPayload } from './vendor-chat-payload.mapper.js';
import { handleVendorAction } from './vendor-chat-action.handler.js';
import { VendorService } from './vendor.service.js';

@Injectable()
export class ChatService {
  constructor(
    @Inject(SearchService) private readonly searchService: SearchService,
    @Inject(ChatIntentService) private readonly chatIntentService: ChatIntentService,
    @Inject(ChatReplyService) private readonly chatReplyService: ChatReplyService,
    @Inject(VendorService) private readonly vendorService: VendorService,
  ) {}

  async processMessage(payload: unknown) {
    const chatPayload = normalizeVendorChatPayload(payload);
    const intent: ChatIntent = this.chatIntentService.detectIntent(chatPayload.text, chatPayload.role);
    const searchResults: SearchResponse | null = intent === 'search'
      ? await this.searchService.search({ query: chatPayload.text })
      : null;

    const vendorActionResult = intent === 'vendorAction' && chatPayload.role === 'vendor'
      ? await handleVendorAction(this.vendorService, chatPayload)
      : null;

    return {
      intent,
      reply: this.chatReplyService.buildReply(intent, chatPayload.text),
      action: vendorActionResult,
      map: searchResults?.results ?? [],
      search: searchResults,
    };
  }
}
