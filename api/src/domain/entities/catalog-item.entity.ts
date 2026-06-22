export type CatalogItemEntity = {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl?: string;
  category?: string;
  createdAt: string;
};
