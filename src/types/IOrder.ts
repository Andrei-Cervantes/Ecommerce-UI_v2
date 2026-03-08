export interface IProductsOrdered {
  productId: string;
  quantity: number;
  subTotal: number;
}

export interface IOrder {
  id: number;
  userId: string;
  productsOrdered: IProductsOrdered[];
  totalPrice: number;
  orderedOn: string;
  status: string;
}
