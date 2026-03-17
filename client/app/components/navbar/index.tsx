'use client';
import { useUI } from "@/app/UIProvider/contextUI";
export const NavbarMobile = () => {
  const { isOpen } = useUI();
  return (
    <nav
      className={` fixed top-0 right-0 w-full z-50 text-black transition-all duration-900 ${isOpen ? "opacity-100 translate-y-[60%]" : "opacity-0 translate-y-[250%] "} md:opacity-100 md:translate-y-[0%] md:col-start-2   md:backdrop-blur-3xl md:h-8`}
    >
      <ul className=" z-10 flex flex-col justify-around items-center h-full Julius-Sans-One text-3xl gap-20 md:flex-row md:text-sm md:justify-evenly md:gap-10">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#products">Articulos</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
