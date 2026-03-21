import { Init } from "./pages/init";
import { ProjectSection } from "./pages/project_section";
import { Articles } from "./pages/articles";
export default function Home() {
  
  return (
    <>
      <Init />
      <ProjectSection />
      <div className="h-100 text-3xl text-center Julius-Sans-One flex justify-center items-center border-b-2 border-t-2 ">
        <p className="">. . . y estas son mis creaciones</p>
      </div>
      <Articles />
 
    </>
  );
}
