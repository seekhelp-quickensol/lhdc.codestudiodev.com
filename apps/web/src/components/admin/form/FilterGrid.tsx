
"use client";
import React from 'react'

interface FilterGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function FilterGrid({ children, className }: FilterGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mb-6 ${className}`}>
      {children}
    </div>
  )
}
 