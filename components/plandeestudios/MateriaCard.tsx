import React from 'react'
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { dataMateriaInterface } from "@/components/types/actions"

interface MateriaCardProps {
  materia: dataMateriaInterface
  onClick: (materia: dataMateriaInterface) => void
}

const MateriaCard: React.FC<MateriaCardProps> = ({ materia, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="cursor-pointer"
    onClick={() => onClick(materia)}
  >
    <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 gap-0 py-0">
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 text-white font-medium">
          <BookOpen className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm sm:text-base leading-tight">{materia.nombreMateria}</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default MateriaCard
