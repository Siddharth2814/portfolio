"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "GAC Solutions Inc.",
      period: "October 2024 – Present",
      achievements: [
        {
          title: "API Development with MuleSoft",
          points: [
            "Built scalable RESTful and SOAP APIs using MuleSoft.",
            "Integrated microservices and enterprise applications.",
            "Achieved a 40% reduction in integration failures.",
          ],
        },
        {
          title: "DataWeave Transformations",
          points: [
            "Developed complex scripts for data mapping.",
            "Enhanced real-time data processing.",
            "Cut manual interventions by 50%.",
          ],
        },
        {
          title: "Cloud Deployment & API Security",
          points: [
            "Used CloudHub for deploying APIs.",
            "Integrated API Gateway for rate-limiting, authentication, and uptime.",
            "Maintained 99.9% uptime with enterprise security compliance.",
          ],
        },
        {
          title: "Error Handling & Monitoring",
          points: [
            "Applied On-Error Propagate for better exception management.",
            "Used Anypoint Monitoring for observability.",
            "Improved API performance (30% faster response).",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "August 2021 – August 2022",
      achievements: [
        {
          title: "Database Management",
          points: [
            "Managed Oracle databases for critical business operations.",
            "Ensured data integrity, security, and availability.",
          ],
        },
        {
          title: "SQL Optimization",
          points: ["Refactored SQL queries and used indexing.", "Achieved a 30% performance boost."],
        },
        {
          title: "Backup & Recovery",
          points: ["Automated backups and disaster recovery planning.", "Ensured 99.9% system uptime."],
        },
        {
          title: "Scripting & Automation",
          points: [
            "Automated repetitive tasks using Python & shell scripts.",
            "Saved 40 hours of manual work per month.",
          ],
        },
        {
          title: "Compliance & Security",
          points: ["Enforced strong access control and regulatory compliance."],
        },
        {
          title: "Data Visualization",
          points: [
            "Created dashboards in Power BI for performance monitoring.",
            "Helped reduce system downtime by 20%.",
          ],
        },
      ],
    },
    {
      title: "System Analyst",
      company: "Netcracker",
      period: "January 2021 – June 2021",
      achievements: [
        {
          title: "Library Architecture Design",
          points: ["Created efficient data libraries.", "Improved lookup performance by 10%."],
        },
        {
          title: "Statistical Analysis",
          points: ["Used Python for data analysis.", "Identified and solved operational inefficiencies (15% boost)."],
        },
        {
          title: "Backend Development (RPG)",
          points: ["Maintained legacy systems with RPG programming.", "Improved backend performance by 20%."],
        },
      ],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-6 w-6 text-gray-700 dark:text-gray-300 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-200">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex}>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{achievement.title}</h4>
                      <ul className="space-y-2">
                        {achievement.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex">
                            <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
