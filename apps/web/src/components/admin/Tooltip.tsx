'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface TooltipCounts {
  success: number;
  failed: number;
  skipped: number;
}

interface TooltipProps {
  counts: TooltipCounts;
  children?: React.ReactNode; // Optional custom trigger
}

const Tooltip: React.FC<TooltipProps> = ({ counts, children }) => {
  const total = counts.success + counts.failed + counts.skipped;

  return (
    <div className="relative inline-block group">
      {/* Trigger Element */}
      {children || (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <Info className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {total} items
          </span>
        </div>
      )}

      {/* Tooltip Content - Positioned on the RIGHT */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50">
        <div className="bg-gray-900 text-white rounded-lg shadow-lg py-3 px-4 min-w-max whitespace-nowrap">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Success</span>
              </div>
              <span className="font-semibold tabular-nums">{counts.success}</span>
            </div>

            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Failed</span>
              </div>
              <span className="font-semibold tabular-nums">{counts.failed}</span>
            </div>

            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Skipped</span>
              </div>
              <span className="font-semibold tabular-nums">{counts.skipped}</span>
            </div>

            {/* <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="flex items-center justify-between gap-8">
                <span className="text-gray-300">Total</span>
                <span className="font-bold">{total}</span>
              </div>
            </div> */}
          </div>

          {/* Arrow pointing left (towards the trigger) */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 -mr-1">
            <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tooltip;