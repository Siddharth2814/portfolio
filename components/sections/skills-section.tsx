"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Link, PenToolIcon as Tool, BarChart } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages & Frameworks",
      skills: ["Python", "SQL", "JavaScript", "HTML", "CSS3", "React", "Node.js", "Flask", "Django"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MySQL", "OracleDB", "PostgreSQL"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS (S3, EC2)", "GCP", "Docker", "Jenkins", "CI/CD pipelines"],
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Integration & APIs",
      skills: ["MuleSoft", "Anypoint Platform", "API Gateway", "DataWeave (used for data transformation)"],
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Agile methodologies"],
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Additional Tools",
      skills: ["Tableau", "Power BI", "Excel (including PivotTables and VBA scripting)"],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Technical Skills</h2>
        <div className="w-24 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full backdrop-blur-md bg-white/40 dark:bg-gray-800/40 border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-400 mr-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
