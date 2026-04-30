'use client';
import Image from "next/image";
import { useUI } from "@/app/UIProvider/contextUI";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const LateralBar = () => {
    const {isOpen, setIsOpen} = useUI()
    const router = useRouter()
    const pathname = usePathname()
    const isInCart = pathname === "/cart"
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigateToCart = () => {
    setIsOpen(false);
    router.replace("/cart")
  }
  return (
    <div
      className="flex flex-col bg-cyan-300/10 items-center justify-between py-1 z-51 fixed top-0 right-0 w-12 h-dvh md:z-100"
     
    >
      {isOpen ? (
        <Image
          width={30}
          height={30}
          src={"/close.png"}
          alt="icono cerrar menu desplegable"
          className="hover:cursor-pointer md:hidden"
           onClick={handleOpenMenu}
        />
      ) : (
        <Image
          width={30}
          height={30}
          src={"/menuH.png"}
          alt="icono de menu desplegable"
          className="hover:cursor-pointer md:hidden"
           onClick={handleOpenMenu}
        />
      )}
      <Image
        width={25}
        height={30}
        src={"/cart.png"}
        alt="icono de carrito con redireccion"
        className={`hover:cursor-pointer transition-all ease-in-out duration-300 ${isInCart ? "opacity-0" : "opacity-100"}`}
        onClick={navigateToCart}
      />
      <Image
        width={30}
        height={30}
        src={"/WhatsApp Btn black.png"}
        alt="icono de whatsapp con redireccion"
        className="hover:cursor-pointer mb-18 md:hidden"
      />
      <Image
        width={30}
        height={30}
        src={"/WhatsApp Btn.png"}
        alt="icono de whatsapp con redireccion"
        className="hover:cursor-pointer hidden md:block"
      />
    </div>
  );
};
