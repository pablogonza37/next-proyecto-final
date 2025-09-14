"use client"

import React from 'react'
import { motion } from "framer-motion"
import { usePlanDeEstudios } from "@/hooks/usePlanDeEstudios"
import SkeletonColumn from "@/components/plandeestudios/SkeletonColumn"
import NivelColumn from "@/components/plandeestudios/NivelColumn"
import MateriaModal from "@/components/plandeestudios/MateriaModal"

const PlanDeEstudios: React.FC = () => {
  const {
    materiasPorNivel,
    loading,
    error,
    selectedMateria,
    getNivelesOrdenados,
    handleMateriaClick,
    handleCloseModal
  } = usePlanDeEstudios()

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 flex-shrink-0"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Plan de Estudios</h1>
          <p className="text-gray-300">
            Explora todas las materias organizadas por niveles académicos
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-wrap gap-4 flex-1 min-h-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonColumn key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-red-400 text-xl mb-2">Error</div>
              <div className="text-gray-400">{error}</div>
            </div>
          </div>
        ) : Object.keys(materiasPorNivel).length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-gray-400 text-xl">No hay materias disponibles</div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0 overflow-x-auto"
          >
            {getNivelesOrdenados().map((nivel, index) => (
              <NivelColumn
                key={nivel}
                nivel={nivel}
                materias={materiasPorNivel[nivel]}
                index={index}
                onMateriaClick={handleMateriaClick}
              />
            ))}
          </motion.div>
        )}
      </div>
      
      <MateriaModal 
        selectedMateria={selectedMateria} 
        onClose={handleCloseModal} 
      />
    </div>
  )
}

export default PlanDeEstudios