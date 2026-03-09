export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  createdOn: string;
}

export interface ICreateProductRequest {
  name: string;
  description: string;
  price: number;
}
