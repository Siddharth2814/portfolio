"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Master's in Computer and Information Science",
      institution: "University of Texas at Arlington, TX, USA",
      duration: "August 2022 – May 2024",
      gpa: "3.5/4",
      notes: "A postgraduate program focusing on computer systems, programming, data analysis, and cloud technologies.",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Keshav Memorial Institute of Technology, Hyderabad, India",
      duration: "August 2017 – May 2021",
      gpa: "7.49/10",
      notes: "Undergraduate education in core computer science principles, software engineering, and programming.",
    },
  ]

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Education</h2>
        <div className="w-24 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 border-gray-200/20 dark:border-gray-700/20 shadow-xl overflow-hidden">
              <div className="h-2 bg-gray-800 dark:bg-gray-700"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">{edu.institution}</p>

                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">{edu.duration}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/20 p-3 rounded-lg">
                  {edu.notes}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
