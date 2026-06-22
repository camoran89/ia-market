import { OrderItem } from '../value-objects/order-item.type.js';

export type OrderEntity = {
  id: string;
  userId: string;
  vendorId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'verification' | 'verified' | 'rejected';
  fulfillmentStatus: 'pending' | 'confirmed' | 'in_preparation' | 'ready' | 'delivered' | 'cancelled';
  createdAt: string;
  metadata?: Record<string, unknown>;
  [key: string]: unknown;
};
