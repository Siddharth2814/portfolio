"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export default function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string
  setActiveSection: (section: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-4">
            <div className="backdrop-blur-md bg-white/90 dark:bg-gray-900/90 rounded-full px-6 py-2 border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
              <ul className="flex space-x-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Button
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => handleNavClick(item.id)}
                      className={`rounded-full px-4 ${
                        activeSection === item.id
                          ? "bg-gray-800 text-white dark:bg-gray-700"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="p-4 flex justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border border-gray-200/20 dark:border-gray-700/20"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-4 w-48 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg border border-gray-200/20 dark:border-gray-700/20"
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2 ${
                      activeSection === item.id
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  )
}
