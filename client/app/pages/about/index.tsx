"use client";
import Image from "next/image";
export const AboutMe = () => {
  return (
    <section id="about" className="h-dvh grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr] gap-2 md:pt-8">
      <div className="h-full flex items-center justify-center">
        <Image width={300} height={300} src={"/Sobre Mi.png"} alt="titulo de seccion Sobre Mi" className="h-40 w-40" />
      </div>
      <div className="h-full flex items-center justify-end">
        <Image width={300} height={300} src={"/about.jpg"} alt="titulo de seccion Sobre Mi"  className="h-full w-50 rounded" />
      </div>
      <p className="h-full text-justify Thasadith">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui cum
        culpa obcaecati ab consectetur odio voluptates cumque officiis animi!
        Voluptates ea ratione fugit incidunt aliquam necessitatibus hic autem
        porro. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Excepturi possimus vitae debitis impedit expedita. 
      </p>
      <div className="h-full flex items-center justify-start">
        <Image width={300} height={300} src={"/about 2.jpg"} alt="titulo de seccion Sobre Mi"  className="h-50 w-50 rounded" />
      </div>
    </section>
  );
};
