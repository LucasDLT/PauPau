'use client';
import { products } from "@/app/mock";
import Image from "next/image";
import { Loader } from "@/app/components/loaderProducts";
import React from "react";
import { useAppContext } from "@/app/context/context";

export const CarouselProject = () => {
  const {app} = useAppContext();
  const projects = Object.values(app.product).filter((product) => product.type === "project");
  const loopProjects = [...projects, ...projects, ...projects, ...projects];
  const lengthItems = projects.length;
  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      {products ? (
        <ul
        style={{
          "--items": lengthItems,
        }as React.CSSProperties}
         className="flex w-max animate-scrollBanner">
          {loopProjects.map((c, i) => (
            <li
              className="relative h-50 w-50 hover:cursor-pointer shrink-0"
              key={i}
            >
              <Image
                src={`${c.image[0]}`}
                alt="imagen ilistrativa de un proyecto"
                fill
                className="hover:scale-110 transform duration-500 ease-in-out"
              />
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};
//nota: falta crear el calculo dinamico para saber cuantos elementos hay y pasarlos por variable de react a css
