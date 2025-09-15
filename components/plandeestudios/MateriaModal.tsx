import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, X } from "lucide-react"
import { dataMateriaInterface } from "@/components/types/actions"

interface MateriaModalProps {
  selectedMateria: dataMateriaInterface | null
  onClose: () => void
}

const MateriaModal: React.FC<MateriaModalProps> = ({ selectedMateria, onClose }) => (
  <AnimatePresence>
    {selectedMateria && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {selectedMateria.nombreMateria}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            {selectedMateria.descripcion}
          </p>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block">
            Nivel {selectedMateria.nivel}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default MateriaModal
