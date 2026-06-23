import { describe, expect, it, vi, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { VendorController } from './vendor.controller.js';
import { VendorService } from '../../application/vendor.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';

describe('VendorController', () => {
  let controller: VendorController;
  let vendorService: VendorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorController],
      providers: [
        {
          provide: VendorService,
          useValue: {
            createProduct: vi.fn(),
            publishCatalogItems: vi.fn(),
            listCatalog: vi.fn(),
            registerSubscription: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<VendorController>(VendorController);
    vendorService = module.get<VendorService>(VendorService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createProduct', () => {
    it('should call vendorService.createProduct with vendorId and payload', async () => {
      const payload: CreateProductDto = {
        name: 'Test Product',
        description: 'A product for testing',
        price: 199.99,
        category: 'Tools',
        stock: 5,
      };
      const vendorId = 'vendor-1';
      const expected = { id: 'prod-1', ...payload, vendorId };
      vi
        .spyOn(vendorService, 'createProduct')
        .mockResolvedValue(expected);

      const result = await controller.createProduct(vendorId, payload);

      expect(vendorService.createProduct).toHaveBeenCalledWith(vendorId, payload);
      expect(result).toEqual(expected);
    });
  });
});
