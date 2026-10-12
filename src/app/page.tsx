import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  JourneySection,
  ProjectsSection,
  SiteFooter,
  SkillsSection,
} from "@/components/portfolio";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
