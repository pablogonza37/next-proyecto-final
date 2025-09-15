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
    <div className="min-h-screen sm:h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 flex-shrink-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">Plan de Estudios</h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explora todas las materias organizadas por niveles académicos
          </p>
        </motion.div>

        {loading ? (
           <div className="flex flex-col sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 lg:place-items-start gap-4 sm:gap-6 flex-1 min-h-0">
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
              className="flex flex-col sm:grid sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 gap-4 sm:gap-6 flex-1 min-h-0"
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