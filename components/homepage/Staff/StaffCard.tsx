"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { type FC } from "react"

interface StaffCardProps {
  name: string
  imageSrc: string
  linkedinUrl?: string
  role?: string
  description?: string
}

export const StaffCard: FC<StaffCardProps> = ({ 
  name, 
  imageSrc, 
  linkedinUrl, 
  role = "Profesor", 
  description 
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="w-full"
    >
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-96 flex flex-col overflow-hidden">
        <CardContent className="p-6 text-center flex flex-col h-full">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Image 
                src={imageSrc} 
                alt={name} 
                width={280} 
                height={280} 
                className="rounded-xl object-cover w-70 h-70 border-2 border-gray-600" 
              />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">{name}</h4>
              <p className="text-blue-400 text-lg font-medium mb-3">{role}</p>
              {description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {description}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              {linkedinUrl && linkedinUrl !== "#" ? (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-700"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              ) : (
                <span className="text-gray-600 p-2">
                  <Linkedin className="h-6 w-6" />
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
