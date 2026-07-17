'use client';
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/context";
import { useUI } from "@/app/UIProvider/contextUI";
import {getTotalCart} from "@/app/helpers/index"


export const BtnTotalCart = () => {
  const router = useRouter();
  const { handleDeleteCart, cart, app } = useAppContext();
  const { setIsInCart } = useUI();
  const handlegoToArticles = () => {
    setIsInCart(false);
    router.push(`/#articles`);
  };
  
  return (
    <div className="flex flex-col justify-around items center Alan-Sans text-sm text-center gap-2 md:flex-row md:justify-between md:items-center">
      <button
        className="border p-1 rounded hover:cursor-pointer"
        onClick={
          handlegoToArticles
        }
      >
        AGREGAR MAS PRODUCTOS
      </button>
      <button
        className="border p-1 rounded hover:cursor-pointer"
        onClick={() => {
          handleDeleteCart();
        }}
      >
        ELIMINAR LOS PRODUCTOS
      </button>
      <p className="border p-1 rounded ">TOTAL:{getTotalCart(cart, app.product)} </p>
    </div>
  );
};
