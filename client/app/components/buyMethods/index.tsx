import Image from "next/image";
export const BuyMethodSection = () => {
  return (
    <section className=" h-dvh grid grid-cols-1 grid-rows-[50px_1fr] place-items-center md:pt-8 Alan-Sans">
      <div className="flex flex-col items-center justify-center gap-1 Thasadith text-3xl mt-8">
        <p>¿Como Comprar?</p>
        <p>Aca te lo explico</p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-evenly md:w-full md:bg-linear-to-bl md:to-slate-900/transparent md:via-yellow-500/20 md:from-slate-900/transparent md:p-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <p>Agregar al carrito</p>
          <div className="relative h-20 w-20 md:h-40 md:w-40  md:rounded-sm">
            <Image
              fill
              src={"/buyMethods/itemsCart.png"}
              alt="icono ilustrativo de carrito de compra"
              className="md:p-1"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <p>Enviarlo</p>
          <div className="relative h-20 w-20 md:h-40 md:w-40 md:rounded-sm">
            <Image
              fill
              src={"/buyMethods/sendCart.png"}
              alt="icono ilustrativo de un sobre enviandose"
              className="md:p-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 ">
          <p>Acordar envio</p>
          <div className="relative h-20 w-20 md:h-40 md:w-40  md:rounded-sm">
            <Image
              fill
              src={"/buyMethods/hands.png"}
              alt="icono ilustrativo para hacer un trato"
              className="md:p-1"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <p>Aguardar entrega</p>
          <div className="relative h-20 w-20 md:h-40 md:w-40  md:rounded-sm">
            <Image
              fill
              src={"/buyMethods/entrega.png"}
              alt="icono ilustrativo de un camion de envio"
              className="md:p-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
