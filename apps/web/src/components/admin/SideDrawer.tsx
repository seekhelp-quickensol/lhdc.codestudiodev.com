'use client';

import { X } from 'lucide-react';
import { ReactNode, useEffect, useRef } from 'react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'; // optional width control
}

const widthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  xxl: 'max-w-2xl',
  xxxl: 'max-w-3xl'
};

export default function SideDrawer({
  isOpen,
  onClose,
  title = 'Form',
  children,
  width = 'md',
}: SideDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // prevent scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      // onClose();
      
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50  transition-opacity" />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`relative bg-white h-full shadow-xl w-full flex flex-col ${widthClasses[width]} transform transition-transform duration-300 ease-out translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200">
         
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors gap-x-1 flex items-center justify-between text-primary text-md"
            aria-label="Close drawer"
          >
            Cancel <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 drawer-body">
        <h2 className="text-2xl font-medium text-primary mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}