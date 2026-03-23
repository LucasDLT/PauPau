"use client";
import Image from "next/image";
export const AboutMe = () => {
  return (
    <section id="about" className="relative h-dvh grid grid-cols-1 grid-rows-[150px_600px_1fr] md:pt-8 md:grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr]">
      <div className="relative p-1 z-10 h-full Alan-Sans text-3xl flex items-center justify-start md:col-start-1 md:justify-center md:text-6xl ">
        <p>Sobre Mi</p>
      </div>

      <p className="relative z-10 h-full flex items-center  bg-linear-to-b to-slate-900/0 via-slate-100/60 from-slate-900/0 p-1 text-justify font-black Thasadith md:bg-linear-to-b md:to-slate-900/0 md:via-slate-600/30 md:from-slate-900/0 md:row-start-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae qui cum
        culpa obcaecati ab consectetur odio voluptates cumque officiis animi!
        Voluptates ea ratione fugit incidunt aliquam necessitatibus hic autem
        porro. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Excepturi possimus vitae debitis impedit expedita. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate incidunt asperiores voluptas quisquam unde reiciendis nesciunt vel illo in labore laboriosam est nemo esse odio facilis, doloribus similique optio rem.
      </p>
      <div className="absolute inset-0 md:relative h-full flex items-center justify-start p-1 md:row-span-2 md:justify-center">
        <Image fill src={"/about 2.jpg"} alt="titulo de seccion Sobre Mi"  className="object-cover opacity-95 h-full w-full rounded-xs opacity-70 md:opacity-100 md:object-contain " />
      </div>
    </section>
  );
};
