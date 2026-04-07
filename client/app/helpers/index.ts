import { Cart, CartViewItem, Product } from "../types/types";
export const getCartView = (cart: Cart, product: Product[]): CartViewItem[] => {
    return Object.values(cart.listItems)
      .map((item) => {
        const cartItem = product.find(
          (prod) => prod.id === Number(item.productId),
        );

        if (!cartItem) return;

        return {
          ...cartItem,
          quantity: item.quantity,
          subtotal: cartItem.price * item.quantity,
        };
      })
      .filter(Boolean) as CartViewItem[];
    //aca este filter elimina los valores que no son thruty y que pueden ser devueltos en el if
  };