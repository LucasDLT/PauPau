"use client";
import { useRouter } from "next/navigation";
import { products } from "../mock";
import Image from "next/image";
export default function CartPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.replace("/");
  };
  return (
    //contenedor general del carrito
    <section className="h-dvh Julius-Sans-One grid grid-cols-1 grid-rows-[20px_1fr_70px_auto] pb-10 gap-10">
      <button onClick={handleGoBack}><Image src={'/circulo-flecha.png'} alt="flecha hacia atras" height={30} width={30} className="rotate-180 hover:cursor-pointer" /></button>

      <div className=" overflow-y-auto h-200 Alan-Sans">
        {products.map((item, i) => (
          <div key={i} className="border-b">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col m-1 rounded">
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  height={100}
                  width={100}
                  className=""
                />
                <div className="flex justify-around rounded  p-1">
                  <button className="bg-olive-500/30 text-center rounded hover:cursor-pointer p-1">
                    <Image
                      src={"/arrow.png"}
                      alt={item.name}
                      height={10}
                      width={10}
                    />
                  </button>

                  <p className="bg-gray-400/60 rounded w-10 text-center">02</p>
                  <button className="bg-olive-500/30 text-center rounded hover:cursor-pointer  p-1">
                    <Image
                      src={"/arrow.png"}
                      alt={item.name}
                      height={10}
                      width={10}
                      className="rotate-180"
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>$ {item.subtotal}</p>
              </div>
              <button>
                <Image
                  src={"/trash.png"}
                  alt={item.name}
                  height={20}
                  width={20}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-around items center Alan-Sans text-sm text-center">
        <button className="border p-1 rounded hover:cursor-pointer">AGREGAR MAS PRODUCTOS</button>
        <p className="border p-1 rounded">TOTAL:10000</p>
      </div>

      <form action="submit" className="font-black flex flex-col gap-8 pb-10">
        <div  className="border-b flex gap-2">
          <label htmlFor="">Nombre</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Apellido</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">DNI</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Pais/Region</label>
          <input type="text" className="custom-input font-light"/>
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Localidad/Ciudad</label>
          <input type="text" className="custom-input font-light"/>
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Direccion</label>
          <input type="text" className="custom-input font-light" />
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Telefono</label>
          <input type="text" className="custom-input font-light"/>
        </div>
        <div  className="border-b flex gap-2">
          <label htmlFor="">Email</label>
          <input type="text" className="custom-input font-light"/>
        </div>
        <div className="flex flex-col h-40">
          <label htmlFor="">Informacion Adicional</label>
          <textarea name="" id=""   className="border rounded h-30 backdrop-blur-xs text-[12px] custom-input font-light "></textarea>
        </div>

        <div className="flex flex-col gap-1 text-[14px]">
          <div className="checkbox-item border rounded-full flex justify-between items-center h-6 px-2">
            <label htmlFor="encuentro" >punto de encuentro sin costo</label>
            <input type="checkbox" id="encuentro" className="custom-checkbox" />
          </div>

          <div className="checkbox-item border rounded-full flex justify-between items-center h-6 px-2">
            <label htmlFor="envio">envio con costo a coordinar</label>
            <input type="checkbox" id="envio" className="custom-checkbox" />
          </div>
        </div>
        <button className="Alan-Sans border rounded">ENVIAR PEDIDO</button>
      </form>
    </section>
  );
}
