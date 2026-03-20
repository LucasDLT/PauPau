import { CarouselProject } from "@/app/components/carousel";
export const ProjectSection = () => {
  return (
    <section className="h-dvh grid grid-cols-1 grid-rows-[300px_200px_200px] text-4xl  text-center place-items-center backdrop-blur-xl md:pt-8">
      <p className="Julius-Sans-One">
        Estos son algunos de mis proyectos personales.
      </p>
      <div className="flex items-center justify-center rounded backdrop-blur-xs bg-amber-300/15 w-full overflow-hidden">
        <CarouselProject />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:flex-row">
        <p className="Julius-Sans-One text-[30px]">
          tenes una idea, y queres que sea realidad...
        </p>
        <button className="hover:cursor-pointer w-60 h-10 rounded-sm bg-blue-400/40 p-1 Julius-Sans-One font-extrabold text-2xl md:hover:bg-blue-400/50 md:hover:text-zinc-700 md:p-0  transition-colors duration-200 ease-in-out ">
          <a href="#contact">CONTACTAME</a>
        </button>
      </div>
    </section>
  );
};

//nota sobre grid: agregue una fila extra para dar espacio al boton de contacto.
