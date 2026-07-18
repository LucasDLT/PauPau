"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { AppStore, Cart, INITIAL_CART, INITIAL_STATE } from "../types/types";
import { products } from "../mock";
import { normalizeProductsById } from "../helpers";

interface ContextProps {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  app: AppStore;
  setApp: React.Dispatch<React.SetStateAction<AppStore>>;
  handleAddItem: (id: number, quantityItems: number) => void;
  handleDeleteItem: (id: number) => void;
  handleDeleteCart: () => void;
  handleIncrementItem: (id: number) => void;
  handleDecrementItem: (id: number) => void;
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
  const handleAddItem = (id: number, quantityItems: number = 1) => {
    setCart((prev) => {
      const idparsed = id.toString();
      const itemExist = prev.listItems[idparsed]; // esto me va a dar el item o undefined si no esta en el carrito
      const total = itemExist
        ? itemExist.quantity + quantityItems
        : quantityItems;

      if (total > app.product[idparsed].stock) {
        return prev;
      }
      return {
        ...prev,
        listItems: {
          ...prev.listItems,
          [idparsed]: itemExist
            ? { ...itemExist, quantity: total }
            : { productId: idparsed, quantity: quantityItems },
        },
      };

    });
  };

  //FN para eliminar un item
  const handleDeleteItem = (id: number) => {
    setCart((prev) => {
      const idParsed = id.toString();
      const { [idParsed]: _, ...rest } = prev.listItems;
      return {
        ...prev,
        listItems: rest,
      };
    });
  };

  //FN para eliminar el carrito
  const handleDeleteCart = () => {
    setCart(INITIAL_CART);
    localStorage.removeItem("cart");
  };

  const handleIncrementItem = (id: number) => {
    setCart((prev) => {
      const idParsed = id.toString();
      const product = app.product[idParsed];
      const existItem = prev.listItems[idParsed];

      if (!existItem) {
        return {
          ...prev,
          listItems: {
            ...prev.listItems,
            [idParsed]: { productId: idParsed, quantity: 1 },
          },
        };
      }

      const isSuperior = existItem.quantity < product.stock;

      return {
        ...prev,
        listItems: {
          ...prev.listItems,
          [idParsed]: {
            ...existItem,
            quantity: isSuperior ? existItem.quantity + 1 : existItem.quantity,
          },
        },
      };
    });
  };

  const handleDecrementItem = (id: number) => {
    setCart((prev) => {
      const idParsed = id.toString();
      const currentItem = prev.listItems[idParsed];
      const { [idParsed]: _, ...rest } = prev.listItems;

      if (currentItem.quantity === 1) {
        return {
          ...prev,
          listItems: rest,
        };
      }

      return {
        ...prev,
        listItems: {
          ...prev.listItems,
          [idParsed]: {
            ...currentItem,
            quantity:
              currentItem.quantity === 1
                ? currentItem.quantity
                : currentItem.quantity - 1,
          },
        },
      };
    });
  };

  useEffect(() => {
    setApp((prev) => {
      const currentProducts = normalizeProductsById(products);
      return {
        ...prev,
        product: currentProducts,
      };
    });
    const saveCart = localStorage.getItem("cart");
    if (saveCart) {
      setCart(JSON.parse(saveCart)!);
    }
  }, []);

useEffect(() => {
  const hasItems = Object.keys(cart.listItems).length > 0;

  if (hasItems) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.removeItem("cart");
  }
}, [cart]);

  const value = {
    cart,
    setCart,
    handleAddItem,
    app,
    setApp,
    handleDeleteItem,
    handleDeleteCart,
    handleIncrementItem,
    handleDecrementItem,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
