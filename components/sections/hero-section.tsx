"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Full name for letter-by-letter animation
  const fullName = "Siddharth Gomatam Srinivasan"

  // Split the name into individual letters for animation
  const letters = fullName.split("")

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          <div className="overflow-hidden whitespace-nowrap sm:whitespace-normal">
            {/* First name with animation */}
            <div className="mb-2 sm:mb-0">
              {fullName
                .split(" ")[0]
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.03,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
            </div>

            {/* Middle name with animation */}
            <div className="mb-2 sm:mb-0 sm:inline sm:ml-4">
              {fullName
                .split(" ")[1]
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={`middle-${index}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: fullName.split(" ")[0].length * 0.03 + index * 0.03,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
            </div>

            {/* Last name with animation */}
            <div className="sm:inline sm:ml-4">
              {fullName
                .split(" ")[2]
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: (fullName.split(" ")[0].length + fullName.split(" ")[1].length + 1) * 0.03 + index * 0.03,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
            </div>
          </div>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: letters.length * 0.03 + 0.2 }}
        className="mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">Software Engineer</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.03 + 0.4, duration: 0.8 }}
        className="max-w-2xl mx-auto mb-10 px-4"
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-6 rounded-xl">
          Experienced software engineer specializing in API development, cloud deployment, and database management.
          Passionate about building scalable solutions and optimizing performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.03 + 0.6, duration: 0.8 }}
      >
        <Button
          onClick={scrollToAbout}
          className="rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-md 
                   bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700
                   text-white transition-all duration-300 
                   hover:-translate-y-0.5 border border-gray-800/50 dark:border-gray-700/50
                   hover:shadow-lg"
        >
          <span>View My Portfolio</span>
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </motion.div>
    </div>
  )
}
