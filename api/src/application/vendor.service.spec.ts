import { describe, expect, it, vi, beforeEach } from 'vitest';
import { VendorService } from './vendor.service.js';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { ProductRepository } from '../domain/product/product-repository.interface.js';
import { CatalogRepository } from '../domain/repositories/catalog.repository.js';
import { SubscriptionRepository } from '../domain/repositories/subscription.repository.js';
import { OrderRepository } from '../domain/repositories/order.repository.js';
import { Product } from '../domain/product/product.entity.js';

describe('VendorService', () => {
  let service: VendorService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = {
      save: vi.fn(),
    } as unknown as ProductRepository;

    const catalogRepository = {
      findByVendorId: vi.fn(),
      save: vi.fn(),
    } as unknown as CatalogRepository;

    const subscriptionRepository = {
      save: vi.fn(),
    } as unknown as SubscriptionRepository;

    const orderRepository = {
      findByVendorId: vi.fn(),
    } as unknown as OrderRepository;

    service = new VendorService(
      orderRepository,
      catalogRepository,
      subscriptionRepository,
      productRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createProduct', () => {
    it('should create and save a product', async () => {
      const payload: CreateProductDto = {
        name: 'Test Product',
        description: 'A product for testing',
        price: 199.99,
        category: 'Tools',
        stock: 5,
      };
      const vendorId = 'vendor-1';
      const saveMock = vi
        .spyOn(productRepository, 'save')
        .mockImplementation(async (product: Product) => product);

      const result = await service.createProduct(vendorId, payload);

      expect(saveMock).toHaveBeenCalledWith(expect.any(Product));
      expect(result.name).toBe(payload.name);
      expect(result.vendorId).toBe(vendorId);
      expect(result.price).toBe(payload.price);
    });
  });
});
