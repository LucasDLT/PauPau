'use client';
import Image from "next/image";
import { useUI } from "@/app/UIProvider/contextUI";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const LateralBar = () => {
    const {isOpen, setIsOpen, isInCart, setIsInCart} = useUI()
    const router = useRouter()
    const pathname = usePathname()
    const inCart = pathname === "/cart"
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigateToCart = () => {
    setIsOpen(false);
    setIsInCart(true);
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
        className={`hover:cursor-pointer transition-all ease-in-out duration-300 ${inCart ? "opacity-0" : "opacity-100"}`}
        onClick={navigateToCart}
      />
      <a href="https://wa.me/541139549908?text=Hola!,%20estoy%20mirando%20tu%20pagina%20web,%20me%20gustaria%20consultarte%20sobre:" target="_blank" rel="noopener noreferrer">
      <Image
        width={30}
        height={30}
        src={"/WhatsApp Btn black.png"}
        alt="icono de whatsapp con redireccion"
        className="hover:cursor-pointer mb-18 md:hidden"
      />
      </a>

      <a href="https://wa.me/541139549908?text=Hola!,%20estoy%20mirando%20tu%20pagina%20web,%20me%20gustaria%20consultarte%20sobre:" target="_blank" rel="noopener noreferrer">
      <Image
        width={30}
        height={30}
        src={"/WhatsApp Btn.png"}
        alt="icono de whatsapp con redireccion"
        className="hover:cursor-pointer hidden md:block"
      />
      </a>
    </div>
  );
};
