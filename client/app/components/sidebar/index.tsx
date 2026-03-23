"use client";
import Image from "next/image";
import { useUI } from "@/app/UIProvider/contextUI";
export const Sidebar = () => {
  const { passHero } = useUI();
  return (
    <div className="flex flex-col items-center bg-cyan-300/10  justify-start  z-51 fixed top-0 left-0 w-12 h-dvh md:z-100">
      <div className={`relative 
       w-12 h-12 md:w-12 md:h-12 m-0.5`}>
        <Image
          fill
          src={"/Title Margen Desktop marginYellow.png"}
          alt="Title Margen Desktop margin"
          className={`$transition-opacity duration-400 ease-in-out ${passHero ? 'opacity-100 hover:cursor-pointer' : 'opacity-0'  }`}
          onClick={() => {
            setTimeout(() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.pushState(null, "", `#home`);
            }, 400);
          }}
        />
      </div>
    </div>
  );
};
