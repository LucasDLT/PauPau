import { useUI } from "@/app/UIProvider/contextUI";
export const NavbarMobile = () => {
  const { isOpen } = useUI();
  return (
    <nav
      className={`absolute w-full h-full text-black transition-all duration-900 ${isOpen ? "opacity-100 translate-y-[40%]" : "opacity-0 translate-y-[80%] "}`}
    >
      <ul className="flex flex-col items-center justify-around Julius-Sans-One text-3xl gap-20">
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
  );
};
