import { Cart, CartViewItem, Products } from "../types/types";
export const getCartView = (cart: Cart, product: Products): CartViewItem[] => {
    return Object.values(cart.listItems)
      .map((item) => {
        const cartItem = product[item.productId];

        if (!cartItem) return;

        return {
          ...cartItem,
          quantity: item.quantity,
          subtotal: cartItem.price * item.quantity,
        };
      })
      .filter((item) => item  !== undefined);
    //aca este filter elimina los valores undefined que pueden ser devueltos en el if
  };