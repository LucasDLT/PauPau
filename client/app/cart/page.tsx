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
    <section className="h-dvh Julius-Sans-One grid grid-cols-1 grid-rows-[20px_1fr_70px_auto] pb-10 gap-10 md:grid-rows-[20px_1fr_50px_70px_450px]">
      <button onClick={handleGoBack}>
        <Image
          src={"/circulo-flecha.png"}
          alt="flecha hacia atras"
          height={30}
          width={30}
          className="rotate-180 hover:cursor-pointer md:justify-self-end"
        />
      </button>

      <div className=" overflow-y-auto h-200 Alan-Sans md:h-80">
        {products.map((item, i) => (
          <div key={i} className="border-b">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col m-1 rounded md:items-center">
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="md:h-10 md:w-10"
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

      <div className="flex flex-col justify-around items center Alan-Sans text-sm text-center md:flex-row md:justify-between md:items-center">
        <button className="border p-1 rounded hover:cursor-pointer">
          AGREGAR MAS PRODUCTOS
        </button>
        <p className="border p-1 rounded ">TOTAL:10000</p>
      </div>
      <p className="self-center text-center py-6 text-3xl  border-yellow-600 border-dashed border-y-2 font-black ">completa el formulario y envialo para coordinar pago y envio.</p>
      <form
        action="submit"
        className="font-black grid grid-cols-1 grid-rows-[1fr_80px_60px] gap-8 pb-10 md:grid-rows-2 md:grid-cols-[1fr_600px]"
      >
        <div className="flex flex-col gap-5 md:col-start-1 md:grid md:gap-8 ">
          <div className="border-b flex gap-2">
            <label htmlFor="">Nombre</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Apellido</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">DNI</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Pais/Region</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Localidad/Ciudad</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Direccion</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Telefono</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="border-b flex gap-2">
            <label htmlFor="">Email</label>
            <input type="text" className="custom-input font-light" />
          </div>
          <div className="flex flex-col h-40">
            <label htmlFor="">Informacion Adicional</label>
            <textarea
              name=""
              id=""
              className="border rounded h-30 backdrop-blur-xs text-[12px] custom-input font-light "
            ></textarea>
          </div>
        </div>

        <div className="grid gap-1 text-[14px] items-center justify-center md:col-start-2 md:row-start-1 md:self-end ">
          <div className="checkbox-item border rounded-full flex justify-between items-center h-8 px-2">
            <label htmlFor="encuentro">punto de encuentro sin costo</label>
            <input type="checkbox" id="encuentro" className="custom-checkbox" />
          </div>

          <div className="checkbox-item border rounded-full flex justify-between items-center h-8 px-2">
            <label htmlFor="envio">envio con costo a coordinar</label>
            <input type="checkbox" id="envio" className="custom-checkbox" />
          </div>
        </div>
        <div className="Alan-Sans justify-self-center self-center  md:col-start-2 md:row-start-2  md:justify-self-center ">
          <button className="bg-olive-500/30 p-1 border rounded  md:h-8 md:hover:cursor-pointer ">
            ENVIAR PEDIDO
          </button>
        </div>
      </form>
    </section>
  );
}
