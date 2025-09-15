import React from 'react'

const SkeletonColumn: React.FC = () => (
  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col min-h-0 w-full sm:w-64 md:w-72">
    <div className="h-8 bg-gray-700 rounded animate-pulse mb-3 flex-shrink-0"></div>
    <div className="grid gap-2 flex-1 overflow-y-auto min-h-0">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-3 flex-shrink-0">
          <div className="h-5 bg-gray-600 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
)

export default SkeletonColumn
