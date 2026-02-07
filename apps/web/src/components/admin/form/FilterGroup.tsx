
"use client";
import React from 'react'

interface FilterGroupProps {
  children: React.ReactNode;
  className?: string;
}

export default function FilterGroup({ children, className }: FilterGroupProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  )
}
