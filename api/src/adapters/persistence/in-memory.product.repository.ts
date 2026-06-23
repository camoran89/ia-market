import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product/product.entity.js';
import { ProductRepository } from '../../domain/product/product-repository.interface.js';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  private readonly products: Map<string, Product> = new Map();

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findAllByVendor(vendorId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (p) => p.vendorId === vendorId,
    );
  }

  async save(product: Product): Promise<Product> {
    this.products.set(product.id, product);
    return product;
  }
}
