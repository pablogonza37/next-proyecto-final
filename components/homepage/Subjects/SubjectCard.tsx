"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { type FC } from "react"

interface SubjectCardProps {
  title: string
  description: string
  duration: string
  buttonText?: string
}

export const SubjectCard: FC<SubjectCardProps> = ({
  title,
  description,
  duration,
  buttonText = "Inscribirse"
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
    >
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-80 flex flex-col overflow-hidden">
        <CardHeader className="flex-1 p-6">
          <CardTitle className="text-white text-xl font-semibold mb-3">{title}</CardTitle>
          <CardDescription className="text-gray-400 text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto p-6 pt-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 text-base font-medium">
              {buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
