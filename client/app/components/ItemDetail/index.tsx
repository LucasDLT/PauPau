"use client";
import { products } from "@/app/mock";
import { Product } from "@/app/types/types";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/context";
import { Counter } from "../contador";

interface ItemDetailProps {
  id: string;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ id }) => {
  const [imageInView, setImageInView] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const router = useRouter();
  const { handleAddItem } = useAppContext();
  const product = products.find(
    (product: Product) => product.id === Number(id),
  );
  const handleGoBack = () => {
    router.push(`/#articles`);
  };

  const handleIndexInView = (id: number) => {
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
    <section className="grid grid-cols-1  grid-rows-1 h-dvh Alan-Sans md:grid-cols-2 md:grid-rows-[30px_1fr] ">
      <button
        onClick={handleGoBack}
        className="hidden md:block md:justify-self-start md:col-start-1 md:row-start-1"
      >
        <Image
          src={"/circulo-flecha.png"}
          alt="flecha hacia atras"
          height={30}
          width={30}
          className="rotate-180 hover:cursor-pointer md:justify-self-end"
        />
      </button>
      {product ? (
        <div className="mt-1 grid grid-cols-1 grid-rows-[40px_230px_50px_1fr_40px] gap-1 md:col-span-2 md:row-span-2 md:grid-rows-[30px_350px_70px_100px_10px] md:grid-cols-[1fr_1fr] md:mt-10">
          <div className="flex justify-around items-center bg-black/20 rounded-t-full text-center md:col-start-2 md:row-start-1 md:bg-transparent">
            <button onClick={handleGoBack} className="md:hidden">
              <Image
                src={"/circulo-flecha.png"}
                alt="flecha hacia atras"
                height={30}
                width={30}
                className="rotate-180 hover:cursor-pointer md:justify-self-end"
              />
            </button>
            <h1 className=" text-2xl text-center md:col-start-2 md:row-start-1 md:bg-transparent">
              {product.name}
            </h1>
          </div>
          <div className="h-full bg-black/20 md:col-start-1 md:row-start-2  md:bg-transparent">
            <Image
              src={product.image[imageInView]}
              alt={`imagen de ${product.name}`}
              height={400}
              width={400}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center md:col-start-1 md:row-start-3 md:justify-center">
            <div className="flex justify-around items-center  bg-black/20 w-full h-10 py-0.5 md:bg-olive/10 md:backdrop-blur-[5px]  md:rounded-full md:h-15 md:w-70">
              {product.image.map((url, index) => (
                <div className="flex justify-center items-center h-full  ">
                  <Image
                    key={index}
                    src={url}
                    alt={`imagen minuatura opcional de ${product.name}`}
                    height={100}
                    width={100}
                    onClick={() => handleIndexInView(index)}
                    className={`transition duration-300 ease-in-out ${imageInView === index && "scale-104 bg-linear-to-b to-yellow-200/20 via-yellow-300/40 from-orange-300/40 rounded-full   "} hover:cursor-pointer h-full w-full object-contain`}
                  />
                </div>
              ))}
            </div>
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
            <div className="flex items-start justify-between w-full border-b">
              <h5>STOCK</h5>
              <p>{product.stock}</p>
            </div>
            <div className="flex items-start justify-between w-full border-b">
              <h5>PRECIO</h5>
              <p>{product.price}</p>
            </div>
          </div>

          <div className="flex justify-evenly items-center w-full bg-black/20 rounded-b-xl h-full md:flex-col md:justify-around md:items-center  md:col-start-2 md:row-start-4  md:bg-transparent">
            <Counter count={count} setCount={setCount} stock={product.stock} />
            <button
              className="border border-gray-900 hover:cursor-pointer rounded px-1 py-0.5 text-[14px]"
              onClick={() => handleAddItem(product.id, count)}
            >
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
