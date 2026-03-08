export const ENDPOINTS = {
  USER: {
    REGISTER: "/users",
    LOGIN: "/users/login",
    UPDATE_PASSWORD: "/users/update-password",
    SET_ADMIN: "/users/{userId}/set-admin",
    GET_USER: "/users/details",
  },
  PRODUCT: {
    CREATE_PRODUCT: "/products",
    GET_ALL_ACTIVE_PRODUCTS: "/products",
    GET_ALL_PRODUCTS: "/products/all",
    GET_PRODUCT_BY_ID: "/products/{productId}",
    UPDATE_PRODUCT: "/products/{productId}/update",
    ARCHIVE_PRODUCT: "/products/{productId}/archive",
    ACTIVATE_PRODUCT: "/products/{productId}/activate",
    SEARCH_BY_NAME: "/products/searchByName",
    SEARCH_BY_PRICE: "/products/searchByPrice",
  },
  ORDER: {
    CHECKOUT: "/orders/checkout",
    GET_USER_ORDERS: "/orders/my-orders",
    GET_ALL_ORDERS: "orders/all-orders",
  },
  CART: {
    GET_CART: "/cart/get-cart",
    ADD_TO_CART: "/cart/add-to-cart",
    REMOVE_FROM_CART: "/cart/{productId}/remove-from-cart",
    UPDATE_CART_QUANTITY: "/cart/update-cart-quantity",
    CLEAR_CART: "/cart/clear-cart",
  },
};
