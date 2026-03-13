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
      className="bg-transparent flex flex-col items-center justify-evenly"
      onClick={handleOpenMenu}
    >
      {isOpen ? (
        <Image
          width={30}
          height={30}
          src={"/close.png"}
          alt="icono cerrar menu desplegable"
          className="hover:cursor-pointer"
        />
      ) : (
        <Image
          width={30}
          height={30}
          src={"/menuH.png"}
          alt="icono de menu desplegable"
          className="hover:cursor-pointer"
        />
      )}
      <Image
        width={30}
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
        className="hover:cursor-pointer"
      />
    </div>
  );
};
