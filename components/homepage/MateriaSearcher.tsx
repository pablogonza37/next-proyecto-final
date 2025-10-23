"use client"

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios'

interface Materia {
  _id: string
  nombreMateria: string
  descripcion: string
  nivel: string
  estado: number
}

interface MateriaSearcherProps {
  className?: string
}

const MateriaSearcher: React.FC<MateriaSearcherProps> = ({ className = "" }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [materias, setMaterias] = useState<Materia[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010/api"

  const buscarMaterias = useCallback(async (search: string) => {
    if (!search.trim()) {
      setMaterias([])
      setIsOpen(false)
      return
    }

    try {
      setIsLoading(true)
      const response = await axios.get(`${API_URL}/materias?search=${encodeURIComponent(search)}`)
      const materiasActivas = response.data.filter((materia: Materia) => materia.estado === 1)
      setMaterias(materiasActivas)
      setIsOpen(materiasActivas.length > 0)
      setSelectedIndex(-1)
    } catch (error) {
      setMaterias([])
      setIsOpen(false)
    } finally {
      setIsLoading(false)
    }
  }, [API_URL])

  const debouncedSearch = useCallback((search: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      buscarMaterias(search)
    }, 600)
  }, [buscarMaterias])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }

  const handleMateriaSelect = (materia: Materia) => {
    router.push(`/subjects/${materia._id}`)
    setSearchTerm("")
    setIsOpen(false)
    setMaterias([])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || materias.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < materias.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < materias.length) {
          handleMateriaSelect(materias[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      buscarMaterias(searchTerm)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const highlightMatch = (text: string, search: string): React.ReactNode => {
    if (!search.trim()) return <span>{text}</span>

    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)

    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} className="bg-blue-500/30 text-blue-300 px-1 rounded">
              {part}
            </mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    )
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
          <Input
            ref={inputRef}
            placeholder="Buscar materias..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="pl-10 bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-11 rounded-lg backdrop-blur-sm"
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader2 className="h-4 w-4 text-gray-400 animate-spin" />
            </div>
          )}
        </div>
        <Button 
          onClick={handleSearchClick}
          disabled={!searchTerm.trim() || isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Buscando...
            </>
          ) : (
            'Buscar'
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && materias.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-md mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl shadow-black/50 z-50 max-h-80 overflow-y-auto"
          >
            <div className="p-2">
              <div className="text-xs text-gray-400 px-3 py-2 border-b border-gray-700">
                {materias.length} {materias.length === 1 ? 'materia encontrada' : 'materias encontradas'}
              </div>
              {materias.map((materia, index) => (
                <motion.button
                  key={materia._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleMateriaSelect(materia)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    index === selectedIndex
                      ? 'bg-blue-600/30 border border-blue-500/50'
                      : 'hover:bg-gray-700/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg flex-shrink-0 mt-0.5">
                      <BookOpen className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white truncate">
                        {highlightMatch(materia.nombreMateria, searchTerm)}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                        {highlightMatch(materia.descripcion, searchTerm)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-600/20 text-blue-300">
                          Nivel {materia.nivel}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-green-600/20 text-green-300">
                          Disponible
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && materias.length === 0 && searchTerm.trim() && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-md mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl shadow-black/50 z-50"
        >
          <div className="p-4 text-center">
            <div className="p-3 bg-gray-700/50 rounded-lg inline-flex items-center justify-center mb-3">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-300 text-sm">No se encontraron materias</p>
            <p className="text-gray-500 text-xs mt-1">Intenta con otros términos de búsqueda</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default MateriaSearcher
