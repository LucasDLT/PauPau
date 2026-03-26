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

      <div className="border-2 border-red-700">
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
                <div className="flex border-2 border-fuchsia-500">
                  <button className="">◄ </button>
                  <div className="bg-blue-400 rounded w-10 text-center">
                    {item.stock}
                  </div>
                  <button>►</button>
                </div>
              </div>

              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.subtotal}</p>
              </div>
              <button>eliminar</button>
            </div>
          </div>
        ))}
        <div className="flex justify-around items center">
          <button>agregar mas articulos</button>
          <p>total</p>
        </div>
      </div>
    </section>
  );
}
