import { Init } from "./pages/init";
import { ProjectSection } from "./pages/project_section";
import { Articles } from "./pages/articles";
import { SectionText } from "./components/sectionText";
export default function Home() {
  
  return (
    <>
      <Init />
      <ProjectSection />
      <SectionText/>
      <Articles />
 
    </>
  );
}
