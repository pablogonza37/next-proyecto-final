"use client"

import React from 'react'
import { motion } from "framer-motion"
import { StaffCard } from "./StaffCard"

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <StaffCard
          name="Francisco Perez"
          imageSrc="/staff/FranciscoPerez.png"
          linkedinUrl="https://www.linkedin.com/in/franprzdev/"
        />

        <StaffCard
          name="Lucas Capdevila"
          imageSrc="/staff/LucasCapdevila.png"
          linkedinUrl="https://www.linkedin.com/in/lucasecapdevila/"
        />

        <StaffCard
          name="Pablo Gonzalez"
          imageSrc="/staff/FranciscoPerez.png"
          linkedinUrl="#"
        />

        <StaffCard
          name="Gerardo Romero Uro"
          imageSrc="/staff/GerardoRomero.png"
          linkedinUrl="https://www.linkedin.com/in/jgromerou/"
        />
      </motion.div>
    </div>
  </motion.section>
  )
}

export default StaffSection