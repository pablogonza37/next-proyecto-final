import React from 'react'
import { motion } from "framer-motion"
import { dataMateriaInterface } from "@/components/types/actions"
import MateriaCard from './MateriaCard'

interface NivelColumnProps {
  nivel: string
  materias: dataMateriaInterface[]
  index: number
  onMateriaClick: (materia: dataMateriaInterface) => void
}

const NivelColumn: React.FC<NivelColumnProps> = ({ nivel, materias, index, onMateriaClick }) => (
  <motion.div
    key={nivel}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
     className="bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-700 flex flex-col h-fit w-full sm:w-full sm:max-w-sm md:w-72 lg:w-full lg:max-w-sm sm:min-h-[400px] md:min-h-[500px]"
  >
    <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-shrink-0">
      <div className="w-3 h-4 bg-blue-500 rounded-full"></div>
      <h2 className="text-lg sm:text-xl font-bold text-white">Nivel {nivel}</h2>
      <span className="bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
        {materias.length}
      </span>
    </div>
    
    <div className="grid gap-3 sm:gap-4 overflow-y-auto min-h-0">
      {materias.map((materia) => (
        <MateriaCard key={materia._id} materia={materia} onClick={onMateriaClick} />
      ))}
    </div>
  </motion.div>
)

export default NivelColumn
