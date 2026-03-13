import Image from "next/image";

export const Init = () => {
  return (
    <main className="bg-[url('/backgroundmobile.png')] bg-no-repeat bg-cover h-dvh grid grid-cols-[30px_1fr_30px]">
      <div className="bg-[url('/margins.png')] bg-no-repeat bg-cover "></div>

      <div className="flex flex-col justify-center items-center">
        <nav className="text-black hidden">
          <ul>
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
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla Title.png"}
          className="hover:cursor-pointer"
        />
      </div>

      <div className="bg-[url('/margins.png')] bg-no-repeat bg-cover flex flex-col justify-evenly ">
        <Image
          width={30}
          height={30}
          src={"/menu.png"}
          alt="icono de menu desplegable"
          className="hover:cursor-pointer"
        />
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
