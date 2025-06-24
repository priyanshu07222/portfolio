import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/project-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      
      {/* <BlogSection /> */}
      <ContactSection />
    </>
  )
}
