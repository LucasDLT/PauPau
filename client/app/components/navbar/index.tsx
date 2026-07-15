"use client";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
export const NavbarMobile = () => {
  const { isOpen, setIsOpen } = useUI();
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/cart" || pathname.startsWith("/detailItem/")) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [pathname]);

  const handleNavigate = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (pathname === "/cart" || pathname.startsWith("/detailItem/")) {
        router.push(`/#${id}`);
        return;
      }
      window.history.pushState(null, "", `#${id}`);
    }, 400);
  };
  return (
    <nav
      className={`flex flex-col gap-10 fixed top-0 w-full h-full z-50 text-black transition-all duration-900 backdrop-blur-3xl ${isOpen ? "opacity-100 translate-y-[0%]" : "opacity-0 translate-y-[250%] "} md:opacity-100 md:translate-y-[0%] md:justify-center md:items-center md:backdrop-blur-none md:h-8  ${isInCart ? "md:hidden" : ""} `}
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
      <ul className=" z-10 flex flex-col justify-around items-center  Julius-Sans-One text-3xl gap-13 md:flex-row md:text-sm md:justify-evenly md:rounded-full md:backdrop-blur-xs md:h-7  md:gap-10 md:bg-linear-to-b to-slate-900/10 via-slate-500/5 from-slate-900/0 md:w-150">
        <li>
          <a
            href="#home"
            onClick={(e) => handleNavigate(e, "home")}
            className="hover:cursor-pointer"
          >
            Inicio
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a href="#articles" onClick={(e) => handleNavigate(e, "articles")}>
            Articulos
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a href="#projects" onClick={(e) => handleNavigate(e, "projects")}>
            Proyectos
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a href="#about" onClick={(e) => handleNavigate(e, "about")}>
            Sobre mi
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a href="#contact" onClick={(e) => handleNavigate(e, "contact")}>
            Contactame
          </a>
        </li>
      </ul>
    </nav>
  );
};
