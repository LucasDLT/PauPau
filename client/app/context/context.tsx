"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { AppStore, Cart, INITIAL_CART } from "../types/types";

interface ContextProps {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  handleAddItem: (id:number) => void
}
interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

export const useAppContext = (): ContextProps => {
  const contextApp = useContext(Context);
  if (!contextApp) {
    throw new Error("Error al iniciar context app");
  }
  return contextApp;
};

export const ContextProvider = ({ children }: ProviderProps) => {
const [cart, setCart] = useState<Cart>(INITIAL_CART);

const handleAddItem = (id:number) =>{
 
  setCart((prev) => {
    const idparsed = id.toString();
    const itemExist = prev.listItems[idparsed] // esto me va a dar el item o undefined si no esta en el carrito

    return{
      ...prev,
      listItems: {
        ...prev.listItems,
        [idparsed]:itemExist
        ? {...itemExist, quantity: itemExist.quantity + 1}
        : {productId:idparsed, quantity:1}
      }
    }
    
  });
  
}
console.log(cart);

  const value = { cart, setCart, handleAddItem };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
