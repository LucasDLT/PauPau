"use client";
import { NavbarMobile } from "@/app/components/navbar";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";

export const Init = () => {
const {isOpen} = useUI()
  return (
    <main className=" min-h-dvh overflow-hidden bg-[url('/backgroundmobile.png')] bg-no-repeat bg-cover grid grid-cols-1 ">
      <div
        className={`flex flex-col items-center z-10 transition-transform ease-in-out duration-900
     ${isOpen ? "translate-y-[0%]" : "translate-y-[35%]"}`}
      >
        <Image
          width={250}
          height={50}
          alt="Tilulo PauPau, arte en arcilla"
          src={"/Pau Pau arte en arcilla Title.png"}
          className="hover:cursor-pointer mt-2"
        />
        <NavbarMobile/>
      </div>


    </main>
  );
};
