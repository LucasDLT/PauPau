"use client";
import { Video } from "@/app/components/video";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";

export const Init = () => {
  const { isOpen, heroRef } = useUI();
  return (
    <main
      ref={heroRef}
      id="home"
      className="min-h-dvh  md:grid md:grid-rows-[30px_auto_1fr] md:grid-cols-[1fr_1fr_500px] md:pt-8 "
    >
      <div className="hidden md:block md:relative  md:col-start-2 md:col-span-2 md:row-span-3 md:self-center-safe md:justify-self-end   ">
        {/*<Image
          fill
          alt="Ilustracion de proyecto en ceramica"
          src={"/imagen home.png"}
          className=""
        />*/}
        {/*<Video/>*/}
      </div>

      <div
        className={`flex items-center justify-center transition-transform ease-in-out duration-900
     ${isOpen ? "transition-opacity duration-400 scale-0" : "translate-y-full"}
     md:col-start-1 md:row-start-2 md:translate-y-50 `}
      >
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla TitleYellow.png"}
          className="hover:cursor-pointer"
        />
      </div>
    </main>
  );
};
