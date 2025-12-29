import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/project-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />

      {/* <BlogSection /> */}
      <ContactSection />
    </>
  )
}
