export type UserEntity = {
  email: string;
  password: string;
  role: 'buyer' | 'seller' | 'supervisor' | 'administrator';
  subscriptionActive?: boolean;
  createdAt?: string;
  [key: string]: unknown;
};
