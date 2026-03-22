"use client";
import { products } from "@/app/mock";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
export const Articles = () => {
  const refItems = useRef<(HTMLLIElement | null)[]>([]);
  const refContainer = useRef<HTMLUListElement | null>(null);  
  useEffect(() => {
    const items = refItems.current;
    if (!refContainer.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            const element = entry.target as HTMLElement
          if (entry.isIntersecting) {
            element.classList.add("visible");
          } else {
            element.classList.remove("visible");
          }
        });
      },
      {
        /* options */
        root: refContainer.current,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );
    //observe con recorrido de referencias
    if (items) {
      items.forEach((item) => {
        if (item) {
          observer.observe(item);
        }
      });
    }
    return () => {
        observer.disconnect()
    }
  }, []);

  const productsFiltered = products.filter(
    (product) => product.type === "product",
  );
  return (
    <div
      id="articles"
      className="h-dvh min-h-0 grid grid-cols-1 grid-rows-[1fr] py-2 border-slate-400 md:pt-8"
    >
      <ul
      ref={refContainer} 
      className="flex flex-col gap-8 overflow-y-auto items-center min-h-0 md:grid md:grid-cols-2 md:grid-rows-[1fr_1fr_1fr] md:alingn-items-center justify-items-center perspective-[1000px]">
        {[...productsFiltered, ...productsFiltered].map((product, i) => (
          <li
            key={i}
            ref={(items) => {
              refItems.current[i] = items;
            }}
            className={`item relative h-150 w-full Thasadith font-extrabold gap-0.5 text-[20px] flex flex-col md:h-50 md:w-100 md:gap-2 md:text-[16px] md:flex-row md:bg-amber-900/20 md:rounded-2xl md:p-1  `}
          >
            <Image
              height={400}
              width={400}
              src={`${product.image}`}
              alt={`${product.name}`}
              className="fill object-contain bg-blue-400/20 rounded-s-full p-1 md:ease-in-out md:rounded-s-2xl  border"
            />
            <div className="bg-amber-200/25 backdrop-blur-sm rounded-se-full p-2 text-olive-900 md:rounded-e-2xl md: flex md:flex-col md:justify-between ">
              <div className="md:flex md:flex-col md:gap-0.5">
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <button className="Alan-Sans p-2 text-[16px] bg-white/50 rounded-sm md:hover:cursor-pointer md:hidden">
                  agregar al carrito
                </button>
              </div>
              <button className="hidden md:block Alan-Sans  md:tracking-wide  md:h-8 md:bg-white/50 md:rounded-e-lg md:hover:cursor-pointer md:text-[14px] md:hover:bg-yellow-200/50 md:hover:text-olive-800 md:transform md:ease-in-out md:duration-300">
                agregar al carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
