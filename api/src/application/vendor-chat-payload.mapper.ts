import { ChatRole } from './types/chat-role.type.js';
import { VendorChatPayload } from './types/vendor-chat-payload.type.js';

export function normalizeVendorChatPayload(payload: unknown): VendorChatPayload & { text: string; role: ChatRole } {
  const raw = typeof payload === 'object' && payload !== null ? payload as Record<string, unknown> : {};

  return {
    text: typeof raw.text === 'string' ? raw.text : '',
    role: raw.role === 'vendor' ? 'vendor' : 'buyer',
    vendorId: typeof raw.vendorId === 'string' ? raw.vendorId : undefined,
    action: typeof raw.action === 'string' ? raw.action as VendorChatPayload['action'] : undefined,
    product: raw.product as VendorChatPayload['product'] | undefined,
    catalogItems: raw.catalogItems as VendorChatPayload['catalogItems'] | undefined,
    plan: typeof raw.plan === 'string' ? raw.plan : undefined,
  };
}
