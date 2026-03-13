"use client";
import Image from "next/image";
import { useState } from "react";

export const Init = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //estado para abrir y cerrar el menu, agregar efectos de animacion al titulo.
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="bg-[url('/backgroundmobile.png')] bg-no-repeat bg-cover h-dvh grid grid-cols-[30px_1fr_30px]">
      <div className="bg-[url('/margins.png')] bg-no-repeat bg-cover "></div>

      <div className={`flex flex-col items-center
     ${isOpen ? 'justify-around':'justify-center'}`}>
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla Title.png"}
          className="hover:cursor-pointer mt-1"
        />
        <nav className={`text-black ${isOpen ? "flex h-full" : "hidden"}`}>
          <ul className="flex flex-col items-center justify-evenly Julius-Sans-One text-3xl">
            <li>
              <a href="#home">INICIO</a>
            </li>
            <li>
              <a href="#products">ARTICULOS</a>
            </li>
            <li>
              <a href="#about">SOBRE MI</a>
            </li>
            <li>
              <a href="#contact">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="bg-[url('/margins.png')] bg-no-repeat bg-cover flex flex-col justify-evenly "
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
    </main>
  );
};
