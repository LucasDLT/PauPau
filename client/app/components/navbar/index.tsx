"use client";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";
export const NavbarMobile = () => {
  const { isOpen, setIsOpen } = useUI();

  const handleNavigate = (id:string)=>{
    setIsOpen(false)
    setTimeout(() => {
      const element= document.getElementById(id)
      element?.scrollIntoView({behavior:"smooth"})
    },300)
  }
  return (
    <nav
      className={`flex flex-col gap-20 fixed top-0 w-full h-full z-50 text-black transition-all duration-900 backdrop-blur-xs ${isOpen ? "opacity-100 translate-y-[0%]" : "opacity-0 translate-y-[250%] "} md:opacity-100 md:translate-y-[0%] md:justify-center md:backdrop-blur-3xl md:h-8`}
    >
      <div
        className={`flex items-center justify-center transition-transform ease-in-out duration-900 scale-0 md:hidden
           ${isOpen ? "translate-y-[6%] scale-100 transition-transform duration-1000 ease-in-out" : ""}
            `}
      >
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla TitleYellow.png"}
          className="hover:cursor-pointer md:hidden"
        />
      </div>
      <ul className=" z-10 flex flex-col justify-around items-center  Julius-Sans-One text-3xl gap-20 md:flex-row md:text-sm md:justify-evenly md:gap-10">
        <li className="hover:cursor-pointer" onClick={()=>handleNavigate("home")}>
          Inicio
        </li>
        <li className="hover:cursor-pointer" onClick={()=>handleNavigate("products")}>
          Articulos
        </li>
        <li className="hover:cursor-pointer" onClick={()=>handleNavigate("about")}>
          Sobre mi
        </li>
        <li className="hover:cursor-pointer" onClick={()=>handleNavigate("contact")}>
          Contacto
        </li>
      </ul>
    </nav>
  );
};
