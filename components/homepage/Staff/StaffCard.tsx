"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { type FC } from "react"

interface StaffCardProps {
  name: string
  imageSrc: string
  linkedinUrl?: string
}

export const StaffCard: FC<StaffCardProps> = ({ name, imageSrc, linkedinUrl }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <motion.div
      className="text-center"
      variants={fadeInUp}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 flex justify-center">
        <Image src={imageSrc} alt={name} width={200} height={200} className="rounded-lg object-cover" />
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{name}</h4>

      <div className="flex justify-center gap-3">
        {linkedinUrl ? (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        ) : (
          <span className="text-gray-600">
            <Linkedin className="h-5 w-5" />
          </span>
        )}
      </div>
    </motion.div>
  )
}
