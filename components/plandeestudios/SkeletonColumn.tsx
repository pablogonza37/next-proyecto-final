import React from 'react'

const SkeletonColumn: React.FC = () => (
   <div className="bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-700 flex flex-col min-h-0 w-full sm:w-full sm:max-w-sm md:w-72 lg:w-full lg:max-w-sm sm:min-h-[400px] md:min-h-[500px]">
    <div className="h-8 bg-gray-700 rounded animate-pulse mb-3 sm:mb-4 flex-shrink-0"></div>
    <div className="grid gap-3 sm:gap-4 flex-1 overflow-y-auto min-h-0">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-3 sm:p-4 flex-shrink-0">
          <div className="h-5 bg-gray-600 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
)

export default SkeletonColumn
