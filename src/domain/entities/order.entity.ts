import { OrderItem } from '../value-objects/order-item.type.js';

export type OrderEntity = {
  id: string;
  userId: string;
  vendorId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  createdAt: string;
  [key: string]: unknown;
};
