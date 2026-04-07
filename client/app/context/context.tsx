"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { AppStore, Cart, INITIAL_CART, INITIAL_STATE, Product, Products } from "../types/types";
import { products } from "../mock";

interface ContextProps {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  handleAddItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  handleDeleteCart: () => void;
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
  const [app, setApp] = useState<AppStore>(INITIAL_STATE);
  const [cart, setCart] = useState<Cart>(INITIAL_CART);

  //FN para agregar un item al carrito previa verificacion de existencia
  const handleAddItem = (id: number) => {
    setCart((prev) => {
      const idparsed = id.toString();
      const itemExist = prev.listItems[idparsed]; // esto me va a dar el item o undefined si no esta en el carrito

      return {
        ...prev,
        listItems: {
          ...prev.listItems,
          [idparsed]: itemExist
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : { productId: idparsed, quantity: 1 },
        },
      };
    });
  };

  //FN para eliminar un item
  const handleDeleteItem = (id: number) => {
    setCart((prev) => {
      const idParsed = id.toString();
      const itemExist = prev.listItems[idParsed];
      return {
        ...prev,
        listItems: {
          ...prev.listItems,
          [idParsed]: itemExist
            ? { productId: "", quantity: 0 }
            : { productId: "", quantity: 0 },
        },
      };
    });
  };

  //FN para eliminar el carrito
  const handleDeleteCart = () => {
    setCart(INITIAL_CART);
  };

  const normalizeProductsById =(products:Product[]):Products=>{
    const item:Products ={}
     for (const element of products) {
      const idParsed=element.id.toString()
      item[idParsed]= element
    }
    return item
  }

  useEffect(() => {
    setApp((prev) => {
      const currentProducts= normalizeProductsById(products)
     return{
      ...prev,
      product:currentProducts
     }
    });
  }, []);
console.log(app.product);

  const value = {
    cart,
    setCart,
    handleAddItem,
    handleDeleteItem,
    handleDeleteCart,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
