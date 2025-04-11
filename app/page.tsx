"use client"

import { useState, useEffect, useRef } from "react"
import FloatingBubblesBackground from "@/components/floating-bubbles"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import SkillsSection from "@/components/sections/skills-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  // Improved scroll detection to update active section
  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "experience", "contact"]

    // Store references to all sections
    sections.forEach((section) => {
      sectionRefs.current[section] = document.getElementById(section)
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find the section that is currently in view
      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section)
            }
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <div className="relative min-h-screen">
      <FloatingBubblesBackground />

      <div className="absolute inset-0 z-20 overflow-y-auto">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <div className="container mx-auto px-4 py-24 md:py-32">
          <section id="home" className="min-h-screen flex items-center">
            <HeroSection />
          </section>

          <section id="about" className="min-h-screen py-16 pt-24">
            <AboutSection />
          </section>

          <section id="education" className="min-h-screen py-16 pt-24">
            <EducationSection />
          </section>

          <section id="skills" className="min-h-screen py-16 pt-24">
            <SkillsSection />
          </section>

          <section id="projects" className="min-h-screen py-16 pt-24">
            <ProjectsSection />
          </section>

          <section id="experience" className="min-h-screen py-16 pt-24">
            <ExperienceSection />
          </section>

          <section id="contact" className="min-h-screen py-16 pt-24">
            <ContactSection />
          </section>
        </div>

        <Footer />
      </div>
    </div>
  )
}
