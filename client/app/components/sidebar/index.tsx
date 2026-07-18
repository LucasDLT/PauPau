"use client";
import Image from "next/image";
import { useUI } from "@/app/UIProvider/contextUI";
import { useRouter, usePathname } from "next/navigation";
export const Sidebar = () => {
  const { passHero, isInCart,setIsInCart, isInDetailItem } = useUI();
  const router = useRouter();
  const pathname = usePathname();
  const id = "home";
  const hadleGoHome = () => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (pathname === "/cart" || pathname.startsWith("/detailItem/")) {
        router.push(`/#${id}`);
        return;
      }
      window.history.pushState(null, "", `#${id}`);
    }, 400);
    setIsInCart(false);
  };

  return (
    <div className="flex flex-col items-center bg-cyan-300/10  justify-start  z-51 fixed top-0 left-0 w-12 h-dvh md:z-100">
      <div
        className={`relative 
       w-12 h-12 md:w-12 md:h-12 m-0.5`}
      >
        <Image
          fill
          src={"/Title Margen Desktop marginYellow.png"}
          alt="Title Margen Desktop margin"
          className={`$transition-opacity duration-400 ease-in-out ${passHero || isInCart || isInDetailItem ? "opacity-100 hover:cursor-pointer" : "opacity-0"}`}
          onClick={() => hadleGoHome()}
        />
      </div>
    </div>
  );
};
