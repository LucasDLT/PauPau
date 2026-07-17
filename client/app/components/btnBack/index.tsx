"use client";
import { useRouter } from "next/navigation";
import { useUI } from "@/app/UIProvider/contextUI";
import Image from "next/image";

export const ButtonBack = () => {
  const {isInCart, setIsInCart} = useUI();
  const router = useRouter();
  const handleGoBack = () => {
    setIsInCart(false);

    router.replace("/");
  };

  return (
    <button onClick={handleGoBack}>
      <Image
        src={"/circulo-flecha.png"}
        alt="flecha hacia atras"
        height={30}
        width={30}
        className="rotate-180 hover:cursor-pointer md:justify-self-end"
      />
    </button>
  );
};
