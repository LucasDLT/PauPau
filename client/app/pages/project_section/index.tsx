"use client";
import { products } from "@/app/mock";
import { Product } from "@/app/types/types";
import { useState } from "react";
import Image from "next/image";
import { Loader } from "@/app/components/loaderProducts";
export const ProjectSection = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const projects = products.filter((c) => c.type === "project");
  const loopProjects = projects.concat(projects);
  return (
    <section className="h-dvh grid grid-cols-1 grid-rows-[100px_1fr_100px_50px_10px] text-3xl text-center place-items-center md:pt-8">
      <p className="Thasadith font-extrabold">
        Estos son algunos de mis proyectos personales.
      </p>
      <div className="border flex items-center justify-center border-black w-full overflow-hidden">
        {products ? (
          <ul className="flex w-max animate-scrollBanner">
            {[...loopProjects, ...projects].map((c) => (
              <li
                className="border border-black relative h-50 w-50 hover:cursor-pointer px-1 shrink-0"
                key={c.id}
              >
                <Image
                  src={`${c.image[0]}`}
                  alt="imagen ilistrativa de un proyecto"
                  fill
                  className=""
                />
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
      <p className="Thasadith">Si tenes una idea, y queres que la cree...</p>
      <button className="hover:cursor-pointer h-full w-full rounded-sm bg-amber-500">
        <a href="#contact">CONTACTAME</a>
      </button>
    </section>
  );
};

//nota sobre grid: agregue una fila extra para dar espacio al boton de contacto.
