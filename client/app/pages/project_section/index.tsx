"use client";
import { products } from "@/app/mock";
import { AppStore, INITIAL_STATE, Product } from "@/app/types/types";
import { useState } from "react";
export const ProjectSection = () => {
  const [product, setProduct] = useState<Product | null>(null);
  return (
    <section className="h-dvh grid grid-cols-1 grid-rows-[100px_1fr_100px_50px_10px] text-3xl text-center place-items-center md:pt-8">
      <p className="Thasadith font-extrabold">
        Estos son algunos de mis proyectos personales.
      </p>
      <div className="border border-black w-full h-full">
        {product ? <div>productos</div> : <div>null</div>}
      </div>
      <p className="Thasadith">Si tenes una idea, y queres que la cree...</p>
      <button className="hover:cursor-pointer h-full w-full rounded-sm bg-amber-500">
        <a href="#contact">CONTACTAME</a>
      </button>
    </section>
  );
};

//nota sobre grid: agregue una fila extra para dar espacio al boton de contacto.
