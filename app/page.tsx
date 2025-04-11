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
  const isManualScrollRef = useRef(false)

  // Improved scroll detection to update active section
  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "experience", "contact"]

    // Immediately get all section references
    const refreshSectionRefs = () => {
      sections.forEach((section) => {
        sectionRefs.current[section] = document.getElementById(section)
      })
    }
    
    refreshSectionRefs()

    const determineActiveSection = () => {
      // Skip if manual navigation is in progress
      if (isManualScrollRef.current) return

      // Get vertical middle of the screen
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportMiddle = scrollY + viewportHeight / 2
      
      // Track which section has the most visibility
      let mostVisibleSection = null
      let maxVisibleArea = 0

      // Check each section
      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (!element) continue
        
        const rect = element.getBoundingClientRect()
        const sectionTop = scrollY + rect.top
        const sectionBottom = sectionTop + rect.height
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(sectionTop, scrollY)
        const visibleBottom = Math.min(sectionBottom, scrollY + viewportHeight)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        
        // Update most visible section
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight
          mostVisibleSection = section
        }
        
        // Special case for sections at the top of the page
        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
          mostVisibleSection = section
          break // This section contains the middle of the viewport, prioritize it
        }
      }

      // Update active section if needed and if we found a visible section
      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection)
      }
    }

    // Initial check after a short delay to ensure DOM is fully loaded
    setTimeout(() => {
      refreshSectionRefs() // Refresh refs again after delay
      determineActiveSection()
    }, 100)

    // Use both requestAnimationFrame for smooth updates and a lightweight scroll listener
    let rafId: number | null = null;
    
    const scrollListener = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          determineActiveSection()
          rafId = null
        })
      }
    }

    // Set up an interval to check active section even when not scrolling
    const intervalId = setInterval(() => {
      determineActiveSection();
    }, 300);

    // Add event listeners
    window.addEventListener("scroll", scrollListener, { passive: true })
    window.addEventListener("resize", refreshSectionRefs)
    
    return () => {
      window.removeEventListener("scroll", scrollListener)
      window.removeEventListener("resize", refreshSectionRefs)
      clearInterval(intervalId)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [activeSection]) // Include activeSection in dependencies

  // Handle manual navigation
  const handleSectionChange = (section: string) => {
    isManualScrollRef.current = true
    setActiveSection(section)
    
    // Reset the manual scroll flag after animation completes
    setTimeout(() => {
      isManualScrollRef.current = false
    }, 1000)
  }

  return (
    <div className="relative min-h-screen">
      <FloatingBubblesBackground />

      <div className="absolute inset-0 z-20 overflow-y-auto" id="scrollContainer">
        <Navigation activeSection={activeSection} setActiveSection={handleSectionChange} />

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
