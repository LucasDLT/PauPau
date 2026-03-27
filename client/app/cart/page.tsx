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
    <section className="border-2 border-blue-800">
      <button onClick={handleGoBack}>atras</button>

      <div className="border-2 border-red-700 overflow-y-auto h-200">
        {products.map((item, i) => (
          <div key={i} className="border-2 border-emerald-800">
            <div className="border-2 border-amber-500 flex justify-around items-center ">
              <div className="flex flex-col">
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  height={100}
                  width={100}
                />
                <div className="flex justify-around rounded bg-gray-400/55 p-1">
                  <button className="bg-blue-400/30 text-center rounded   p-1">
                    <Image
                      src={"/arrow.png"}
                      alt={item.name}
                      height={10}
                      width={10}
                    />
                  </button>

                  <p className="bg-blue-400 rounded w-10 text-center">02</p>
                  <button className="bg-blue-400/30 text-center rounded   p-1">
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
                <p>{item.price}</p>
                <p>{item.subtotal}</p>
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

      <div className="flex justify-around items center">
        <button>agregar mas articulos</button>
        <p>total:10000</p>
      </div>

      <form action="submit">
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">DNI</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Pais/Region</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Localidad/Ciudad</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Direccion</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Informacion Adicional</label>
          <textarea name="" id=""></textarea>
        </div>

        <div>
          <div className="checkbox-item">
            <label htmlFor="encuentro" >punto de encuentro</label>
            <input type="checkbox" id="encuentro" className="custom-checkbox" />
          </div>

          <div className="checkbox-item">
            <label htmlFor="envio">envio con costo a coordinar</label>
            <input type="checkbox" id="envio" className="custom-checkbox" />
          </div>
        </div>
        <button>enviar pedido</button>
      </form>
    </section>
  );
}
