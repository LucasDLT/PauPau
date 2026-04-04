import { Init } from "./views/init";
import { ProjectSection } from "./views/project_section";
import { Articles } from "./views/articles";
import { SectionText } from "./components/sectionText";
import { AboutMe } from "./views/about";
import { BuyMethodSection } from "./components/buyMethods";
import { ContactSection } from "./views/contact";
export default function Home() {
  return (
    <>
      <Init />
      <SectionText />
      <Articles />
      <ProjectSection />
      <AboutMe />
      <BuyMethodSection />
      <ContactSection />
    </>
  );
}
