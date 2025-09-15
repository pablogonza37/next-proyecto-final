'use client'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  className?: string
}

export default function Loader({ 
  size = 'md', 
  fullScreen = false, 
  className = '' 
}: LoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-16 h-16 border-4'
  }

  const spinner = (
    <div 
      className={`${sizeClasses[size]} border-blue-500 border-dashed rounded-full animate-spin ${className}`}
    />
  )

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800 border-b border-gray-700">
        {spinner}
      </div>
    )
  }

  return spinner
}

export const LoaderSpinner = Loader