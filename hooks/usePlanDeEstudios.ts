import { useState, useEffect } from 'react'
import { obtenerMaterias } from "@/app/admin/inscripciones/actions"
import { dataMateriaInterface } from "@/components/types/actions"

interface MateriasPorNivel {
  [key: string]: dataMateriaInterface[]
}

export const usePlanDeEstudios = () => {
  const [materiasPorNivel, setMateriasPorNivel] = useState<MateriasPorNivel>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedMateria, setSelectedMateria] = useState<dataMateriaInterface | null>(null)

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        setLoading(true)
        const materiasData = await obtenerMaterias()
        
        const materiasAgrupadas: MateriasPorNivel = {}
        
        materiasData
          .filter((materia: dataMateriaInterface) => materia.estado === 1)
          .forEach((materia: dataMateriaInterface) => {
            const nivel = materia.nivel
            if (!materiasAgrupadas[nivel]) {
              materiasAgrupadas[nivel] = []
            }
            materiasAgrupadas[nivel].push(materia)
          })
        
        setMateriasPorNivel(materiasAgrupadas)
      } catch (err) {
        setError("No se pudieron cargar las materias del plan de estudios")
      } finally {
        setLoading(false)
      }
    }

    cargarMaterias()
  }, [])

  const getNivelesOrdenados = (): string[] => {
    return Object.keys(materiasPorNivel).sort((a, b) => {
      const nivelA = parseInt(a)
      const nivelB = parseInt(b)
      return nivelA - nivelB
    })
  }

  const handleMateriaClick = (materia: dataMateriaInterface) => {
    setSelectedMateria(materia)
  }

  const handleCloseModal = () => {
    setSelectedMateria(null)
  }

  return {
    materiasPorNivel,
    loading,
    error,
    selectedMateria,
    getNivelesOrdenados,
    handleMateriaClick,
    handleCloseModal
  }
}
