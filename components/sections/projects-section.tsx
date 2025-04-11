"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, QrCode, BarChart, MessageSquare } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Gait Pattern Prediction using Electromyography",
      icon: <Activity className="h-6 w-6" />,
      description: [
        "Developed a predictive model to identify athletes' gait patterns using NodeMcu ESP-8266 and MyoWare Sensor.",
        "Applied CNN and RNN algorithms to analyse data and predict outcomes, enhancing rehabilitation effectiveness.",
        "Achieved an outcome of 98.44% for the CNN algorithm.",
      ],
      technologies: ["CNN", "RNN", "NodeMcu ESP-8266", "MyoWare Sensor"],
    },
    {
      title: "24/7 Monitoring of Home Quarantined Patients",
      icon: <Activity className="h-6 w-6" />,
      description: [
        "Designed an IoT module to monitor home quarantined patients' vital signs in real-time.",
        "Utilized Cayenne web services for remote data transmission to healthcare providers for timely intervention.",
      ],
      technologies: ["IoT", "Cayenne", "Real-time Monitoring"],
    },
    {
      title: "QR Inventory Management System",
      icon: <QrCode className="h-6 w-6" />,
      description: [
        "Created an Android mobile application using Flutter for generating and scanning QR codes to manage inventory in hangars.",
      ],
      technologies: ["Flutter", "Android", "QR Code", "Inventory Management"],
    },
    {
      title: "COVID-19 Tracker Web Application",
      icon: <BarChart className="h-6 w-6" />,
      description: [
        "Developed a real-time application to display comprehensive COVID-19 pandemic information using REACT.JS.",
        'Integrated with the "disease.sh" API for data retrieval and hosted on Google Firebase for accessibility.',
      ],
      technologies: ["React.js", "Firebase", "API Integration", "Real-time Data"],
    },
    {
      title: "Sentiment of Twitter on COVID-19",
      icon: <MessageSquare className="h-6 w-6" />,
      description: [
        "Conducted sentiment analysis of Twitter users' responses to Indian Government decisions on COVID-19 measures.",
        "The analysis of sentiment was done using the Scikit-learn machine learning library, Natural Language Toolkit Library and spaCy Library.",
        "Developed a Django web app to analyze tweet sentiment and provide insights on public opinion, and it will display the average sentiment of the replies of that tweet.",
      ],
      technologies: ["Django", "Scikit-learn", "NLTK", "spaCy", "Sentiment Analysis"],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Projects</h2>
        <div className="w-24 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, index) => (
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
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mr-3 mt-1">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
                </div>

                <div className="ml-12 space-y-4">
                  <ul className="space-y-2">
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex">
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
