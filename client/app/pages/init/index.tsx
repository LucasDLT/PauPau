"use client";
import { NavbarMobile } from "@/app/components/navbar";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";

export const Init = () => {
  const { isOpen } = useUI();
  return (
    <main className="min-h-dvh overflow-hidden bg-[url('/backgroundApp.jpg')] bg-no-repeat bg-cover grid grid-cols-1 md:grid md:grid-rows-[30px_auto_1fr] md:grid-cols-[1fr_500px] ">

      <div
        className={`flex flex-col items-center justify-center transition-transform ease-in-out duration-900
     ${isOpen ? "translate-y-[0%]" : "translate-y-[90%]"}
     md:col-start-1 md:row-start-2 `}
      >
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla Title.png"}
          className="hover:cursor-pointer  "
        />
      </div>

      <NavbarMobile />
      <div  className="hidden md:block md:relative md:hover:cursor-pointer md:col-start-2  md:row-span-3">
              <Image
                 fill
                  alt="Tilulo PauPau, arte en arcilla"
                  src={"/imagen home.png"}
                  className="rounded-t"
                  
              />
      </div>
          
    </main>
  );
};