import { Init } from "./pages/init";
import { ProjectSection } from "./pages/project_section";
import { Articles } from "./pages/articles";
import { SectionText } from "./components/sectionText";
import { AboutMe } from "./pages/about";
import { BuyMethodSection } from "./components/buyMethods";
import { ContactSection } from "./pages/contact";
export default function Home() {
  return (
    <>
      <Init />
      <ProjectSection />
      <SectionText />
      <Articles />
      <AboutMe />
      <BuyMethodSection />
      <ContactSection />
    </>
  );
}
