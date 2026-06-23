import { randomUUID } from 'crypto';

export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  vendorId: string;
  category: string;
  stock: number;

  constructor(
    id: string | null,
    name: string,
    description: string,
    price: number,
    vendorId: string,
    category: string,
    stock: number,
  ) {
    this.id = id || randomUUID();
    this.name = name;
    this.description = description;
    this.price = price;
    this.vendorId = vendorId;
    this.category = category;
    this.stock = stock;
  }
}
