"use client";
import React from "react";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard2: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`bg-[#fff] ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 py-3">
        <h3 className="text-xl font-medium text-primary dark:text-white/90">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-secondary dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="px-4 py-1 sm:px-1 sm:py-1">
        <div className="space-y-6 relative ">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard2;
