import { Product } from './product.entity.js';

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findAllByVendor(vendorId: string): Promise<Product[]>;
  save(product: Product): Promise<Product>;
}
