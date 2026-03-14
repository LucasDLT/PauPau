import { useUI } from "@/app/UIProvider/contextUI";
export const NavbarMobile = () => {
  const { isOpen } = useUI();
  return (
    <nav
      className={`w-full h-full text-black transition-all duration-900 ${isOpen ? "opacity-100 translate-y-[-4%]" : "opacity-0 translate-y-[80%] "} md:opacity-100 md:translate-y-[0%] md:col-start-2 `}
    >
      <ul className="flex flex-col justify-around items-center h-full Julius-Sans-One text-3xl gap-20 md:flex-row md:gap-0 md:text-sm">
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
