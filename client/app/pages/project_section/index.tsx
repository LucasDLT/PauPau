
import { CarouselProject } from "@/app/components/carousel";
export const ProjectSection = () => {
  return (
    <section className="h-dvh grid grid-cols-1 grid-rows-[100px_1fr_100px_50px_10px] text-3xl text-center place-items-center md:pt-8">
      <p className="Thasadith font-extrabold">
        Estos son algunos de mis proyectos personales.
      </p>
      <div className="flex items-center justify-center rounded backdrop-blur-xs bg-amber-300/15 w-full overflow-hidden">
        <CarouselProject />
      </div>
      <p className="Thasadith">Si tenes una idea, y queres que la cree...</p>
      <button className="hover:cursor-pointer h-full w-60 rounded-sm bg-amber-300">
        <a href="#contact">CONTACTAME</a>
      </button>
    </section>
  );
};

//nota sobre grid: agregue una fila extra para dar espacio al boton de contacto.
