"use client"

import React from 'react'
import { motion } from "framer-motion"
import { StaffCard } from "./StaffCard"

interface StaffMember {
  id: number
  name: string
  imageSrc: string
  linkedinUrl?: string
  role: string
  description: string
}

const mockStaffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Francisco Perez",
    imageSrc: "/staff/FranciscoPerez.png",
    linkedinUrl: "https://www.linkedin.com/in/franprzdev/",
    role: "Profesor Senior",
    description: "Especialista en desarrollo full-stack con más de 8 años de experiencia en tecnologías web modernas."
  },
  {
    id: 2,
    name: "Lucas Capdevila",
    imageSrc: "/staff/LucasCapdevila.png",
    linkedinUrl: "https://www.linkedin.com/in/lucasecapdevila/",
    role: "Profesor de Backend",
    description: "Experto en arquitectura de sistemas distribuidos y bases de datos con enfoque en Node.js y microservicios."
  },
  {
    id: 3,
    name: "Pablo Gonzalez",
    imageSrc: "/staff/PabloGonzalez.png",
    linkedinUrl: "https://www.linkedin.com/in/pablo-gonzalez-92b360382",
    role: "Profesor de Algoritmos",
    description: "Especialista en estructuras de datos y algoritmos con amplia experiencia en optimización de código."
  },
  {
    id: 4,
    name: "Gerardo Romero Uro",
    imageSrc: "/staff/GerardoRomero.png",
    linkedinUrl: "https://www.linkedin.com/in/jgromerou/",
    role: "Coordinador Académico",
    description: "Líder académico con experiencia en gestión de proyectos educativos y desarrollo de currículas técnicas."
  }
]

function StaffSection() {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-gray-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          STAFF
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mockStaffMembers.map((member) => (
            <StaffCard
              key={member.id}
              name={member.name}
              imageSrc={member.imageSrc}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default StaffSection