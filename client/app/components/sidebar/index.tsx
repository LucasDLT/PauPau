'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
const path = usePathname()
console.log(path);

  return (
    <div
      className="flex flex-col items-center justify-start pt-2 fixed top-0 left-0 w-8.75 h-dvh md:z-100"
    >
      
     { path !== "/" && <Image
       fill
        src={"/Title Margen Desktop margin.png"}
        alt="Title Margen Desktop margin"
        className="hover:cursor-pointer"
      />}
    </div>
  );
};
