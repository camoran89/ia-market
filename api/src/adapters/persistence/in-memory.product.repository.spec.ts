import { describe, expect, it, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryProductRepository } from './in-memory.product.repository';
import { Product } from '../../domain/product/product.entity';

describe('InMemoryProductRepository', () => {
  let repository: InMemoryProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemoryProductRepository],
    }).compile();

    repository = module.get<InMemoryProductRepository>(InMemoryProductRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('save and findById', () => {
    it('should save a product and find it by id', async () => {
      const product = new Product(
        null,
        'Test Product',
        'Test Description',
        100,
        'vendor-1',
        'Test Category',
        10,
      );
      await repository.save(product);
      const found = await repository.findById(product.id);
      expect(found).toEqual(product);
    });

    it('should return null if product not found', async () => {
      const found = await repository.findById('non-existent-id');
      expect(found).toBeNull();
    });
  });

  describe('findAllByVendor', () => {
    it('should return all products for a given vendor', async () => {
      const product1 = new Product(null, 'P1', 'D1', 1, 'vendor-1', 'C1', 1);
      const product2 = new Product(null, 'P2', 'D2', 2, 'vendor-2', 'C2', 2);
      const product3 = new Product(null, 'P3', 'D3', 3, 'vendor-1', 'C3', 3);

      await repository.save(product1);
      await repository.save(product2);
      await repository.save(product3);

      const vendor1Products = await repository.findAllByVendor('vendor-1');
      expect(vendor1Products).toHaveLength(2);
      expect(vendor1Products).toContainEqual(product1);
      expect(vendor1Products).toContainEqual(product3);
    });

    it('should return an empty array if vendor has no products', async () => {
      const products = await repository.findAllByVendor('non-existent-vendor');
      expect(products).toHaveLength(0);
    });
  });
});
