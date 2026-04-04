"use client";
import { products } from "@/app/mock";
import { Product } from "@/app/types/types";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ItemDetailProps {
  id: string;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ id }) => {
  const [imageInView, setImageInView] = useState<number>(0);
  const router = useRouter();
  const product = products.find(
    (product: Product) => product.id === Number(id),
  );
  const handleGoBack = () => {
    router.push(`/#articles`);
  };

  const handleIndexInView = (id: number) => {
    console.log(id);

    setImageInView(id);
  };

  if (!product) {
    return (
      <div>
        <p>product not found</p>
      </div>
    );
  }
  return (
    <section className="grid grid-cols-1  grid-rows-[50px_1fr] h-dvh Alan-Sans md:grid-cols-2 md:grid-rows-[30px_1fr] ">
      <button onClick={handleGoBack}
      className="md:col-start-2 md:row-start-1">
        <Image
          src={"/circulo-flecha.png"}
          alt="flecha hacia atras"
          height={30}
          width={30}
          className="rotate-180 hover:cursor-pointer md:justify-self-end"
        />
      </button>
      {product ? (
        <div className=" grid grid-cols-1 grid-rows-[30px_250px_50px_1fr_40px_10px] gap-1 md:col-span-2 md:row-span-2 md:grid-rows-[30px_350px_70px_40px_10px] md:grid-cols-[1fr_1fr] md:mt-10">
          <h1 className=" text-2xl bg-black/20 rounded-t-full text-center md:col-start-2 md:row-start-1 md:bg-transparent">{product.name}</h1>
          <div className="h-full bg-black/20 md:col-start-1 md:row-start-2  md:bg-transparent">
            <Image
              src={product.image[imageInView]}
              alt={`imagen de ${product.name}`}
              height={400}
              width={400}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex justify-between items-center md:col-start-1 md:row-start-3 md:justify-center">
            <div className="flex justify-around items-center  bg-black/20 w-50 h-10 py-0.5  md:bg-transparent md:border md:border-gray-500 md:rounded-full md:h-15 md:w-70">
              {product.image.map((url, index) => (
                <div className="flex justify-center items-center h-full  ">
                  <Image
                    key={index}
                    src={url}
                    alt={`imagen minuatura opcional de ${product.name}`}
                    height={100}
                    width={100}
                    onClick={() => handleIndexInView(index)}
                    className={`transition duration-300 ease-in-out ${imageInView === index && "scale-104 bg-linear-to-b to-yellow-200/80 via-yellow-300/70 from-orange-300/80 rounded-full  border-red-900/50 border "} hover:cursor-pointer h-full w-full object-contain`}
                  />
                </div>
              ))}
            </div>
            <p className="flex justify-center items-center bg-black/20 h-10 w-30  md:bg-transparent"> ${product.price}</p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 bg-linear-to-l to-slate-900/50 via-slate-100/10 from-yellow-900/10 rounded-b-sm p-1 md:col-start-2 md:row-start-2  md:bg-none ">
            <div className="flex items-start justify-center text-center w-full">
              <p>{product.description}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>COLOR</h5>
              <p>{product.color}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>MATERIAL</h5>
              <p>{product.material}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>ACABADO</h5>
              <p>{product.finished}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>TAMAÑO</h5>
              <p>{product.size}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>PESO</h5>
              <p>{product.weight}</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-full bg-black/20 rounded-b-xl h-full md:col-start-2 md:row-start-4  md:bg-transparent">
            <button className="border border-gray-900 hover:cursor-pointer rounded px-1 py-0.5 ">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      ) : (
        <h1>cargando...</h1>
      )}
    </section>
  );
};
