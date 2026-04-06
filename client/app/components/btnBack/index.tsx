"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const ButtonBack = () => {
  const router = useRouter();
  const handleGoBack = () => {
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
