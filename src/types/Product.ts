export type Product = {
  id: number;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  createdAt?: Date;
  updatedAt?: Date;
  ProductImages?: ProductImages[];
};

export type ProductImages = {
  id: number;
  path: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductFormPost = {
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  files?: File[];
  ProductImages?: ProductImages[];
};
