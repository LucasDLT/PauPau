'use client';
import Image from "next/image";
import { useUI } from "@/app/UIProvider/contextUI";
export const LateralBar = () => {
    const {isOpen, setIsOpen} = useUI()
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="flex flex-col bg-cyan-300/10 items-center justify-between py-1 z-51 fixed top-0 right-0 w-12 h-dvh md:z-100"
      onClick={handleOpenMenu}
    >
      {isOpen ? (
        <Image
          width={30}
          height={30}
          src={"/close.png"}
          alt="icono cerrar menu desplegable"
          className="hover:cursor-pointer md:hidden"
        />
      ) : (
        <Image
          width={30}
          height={30}
          src={"/menuH.png"}
          alt="icono de menu desplegable"
          className="hover:cursor-pointer md:hidden"
        />
      )}
      <Image
        width={25}
        height={30}
        src={"/cart.png"}
        alt="icono de carrito con redireccion"
        className="hover:cursor-pointer"
      />
      <Image
        width={30}
        height={30}
        src={"/WhatsApp Btn black.png"}
        alt="icono de whatsapp con redireccion"
        className="hover:cursor-pointer md:hidden"
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
