"use client";
import Image from "next/image";
export const ContactSection = () => {
  return (
    <section
      id="contact"
      className=" relative h-dvh grid grid-cols-1 grid-rows-[60px_1fr_60px]  md:static md:pt-8 md:grid-cols-[1fr_1fr_1fr]"
    >
      <div className="row-start-1 md:hidden">
        <Image
          src={"/backgroundContact.jpg"}
          alt="imagen de fondo seccion contacto"
          height={200}
          width={200}
          className="
  z-0 h-full w-full absolute object-cover
  mask-[linear-gradient(to_bottom,transparent_0%,black_30%,black_90%,transparent_100%)]
 
"
        ></Image>
      </div>
      <div className="hidden md:block md:row-span-3   md:mask-[linear-gradient(to_bottom,black_70%,transparent)] md:col-start-1 md:justify-self-start md:self-end md:max-w-65 md:w-full">
        <Image
          src={"/contact.jpg"}
          alt="imagen lateral en seccion contacto"
          className="h-auto w-full rounded-se-full "
          height={300}
          width={300}
        ></Image>
      </div>
      <div className="hidden md:block md:row-span-3 md:mask-[linear-gradient(to_top,black_70%,transparent)] md:max-w-65 md:w-full md:col-start-3 md:justify-self-end md:self-start">
        <Image
          src={"/contact2.jpg"}
          alt="imagen lateral en seccion contacto"
          className="h-auto w-full rounded-br-full scale-x-[-1]"
          height={300}
          width={300}
        ></Image>
      </div>
      <form
        method="post"
        className="row-start-2 flex flex-col z-10 items-center justify-around rounded m-2 Thasadith font-black bg-blue-500/20 
md:bg-transparent
md:bg-linear-to-b 
md:from-red-900/5 
md:via-green-300/30 
md:to-orange-900/5 md:col-start-2 md:w-full md:backdrop-blur-[3px]"
      >
        <div className="flex flex-col w-full px-6">
          <label htmlFor="" id="name">
            Nombre
          </label>
          <input type="text" className="bg-yellow-100/50 rounded" />
        </div>
        <div className="flex flex-col w-full px-6">
          <label htmlFor="" id="surname">
            Apellido
          </label>
          <input type="text" className="bg-yellow-100/50 rounded" />
        </div>
        <div className="flex flex-col w-full px-6">
          <label htmlFor="" id="phone">
            Telefono
          </label>
          <input type="text" className="bg-yellow-100/50 rounded" />
        </div>
        <div className="flex flex-col w-full px-6">
          <label htmlFor="" id="email">
            Email
          </label>
          <input type="text" className="bg-yellow-100/50 rounded" />
        </div>
        <div className="flex flex-col w-full px-6 h-50">
          <textarea
            name="details"
            id="details"
            className="bg-amber-100/50 rounded h-full"
          ></textarea>
        </div>
        <div className="flex w-30 Alan-Sans">
          <button
            type="button"
            className="bg-amber-100/50 p-1 hover:cursor-pointer rounded w-full"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </section>
  );
};
