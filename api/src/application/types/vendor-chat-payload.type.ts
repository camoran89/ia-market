import { CatalogItemEntity } from '../../domain/entities/catalog-item.entity.js';
import { CreateProductDto } from '../dtos/create-product.dto.js';
import { VendorChatAction } from './vendor-chat-action.type.js';

export type VendorChatPayload = {
  text: string;
  role?: 'buyer' | 'vendor';
  vendorId?: string;
  action?: VendorChatAction;
  product?: CreateProductDto;
  catalogItems?: Omit<CatalogItemEntity, 'id' | 'vendorId' | 'createdAt'>[];
  plan?: string;
};
