import { Cart, CartViewItem, Product, Products } from "../types/types";
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

  export const normalizeProductsById = (products: Product[]): Products => {
    const item: Products = {};
    for (const element of products) {
      const idParsed = element.id.toString();
      item[idParsed] = element;
    }
    return item;
  };


    export const getTotalCart=(cart: Cart, product: Products):number=>{
      const totalItems = getCartView(cart, product )
      const total = totalItems.reduce((acc, currentValue)=> acc + currentValue.subtotal,0) 
      return total   
    }

    export const getTotalCartForm=(cart: Cart, product: Products)=>{
      const totalItems = getCartView(cart, product )
      const total = totalItems.reduce((acc, currentValue)=>{
        acc.total = acc.total + currentValue.subtotal,
        acc.totalItems = acc.totalItems + currentValue.quantity,
        acc.totalProucts = acc.totalProucts + 1

        return acc
      },{
        total:0,
        totalItems:0,
        totalProucts:0
      }) 
      return total   
    }