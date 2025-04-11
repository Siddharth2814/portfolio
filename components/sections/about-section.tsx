"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Linkedin, MapPin } from "lucide-react"

export default function AboutSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (817) 271-2155",
      link: "tel:+18172712155",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "siddharthgomatamsrinivasan@gmail.com",
      link: "mailto:siddharthgomatamsrinivasan@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/siddharth-gomatam-srinivasan-a85a70184",
      link: "https://linkedin.com/in/siddharth-gomatam-srinivasan-a85a70184",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Seattle, WA",
      link: null,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Me</h2>
        <div className="w-24 h-1 bg-gray-800 dark:bg-gray-200 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 border-gray-200/20 dark:border-gray-700/20 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Personal Profile</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I am a dedicated software engineer with expertise in API development, cloud technologies, and database
                management. With a strong educational background and professional experience at companies like GAC
                Solutions and TCS, I specialize in building scalable solutions and optimizing system performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-md bg-white/40 dark:bg-gray-800/40 border-gray-200/20 dark:border-gray-700/20 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Information</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full mr-3">{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
