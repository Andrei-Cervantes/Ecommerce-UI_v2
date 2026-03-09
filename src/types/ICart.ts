export interface ICartItem {
  productId: string;
  quantity: number;
  subtotal: number;
}

export interface ICart {
  id: number;
  userID: string;
  cartItems: ICartItem[];
  totalPrice: number;
  orderedOn: string;
}

export interface IUpdateCartRequest {
  cartItems: {
    productId: string;
    quantity: number;
  }[];
}
