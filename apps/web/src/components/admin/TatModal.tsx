"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface TatItem {
  id: number;
  status: string;
  assignedBy: string;
  time: number;
}

interface TatModalProps {
  open: boolean;
  onClose: () => void;
  tatData: TatItem[];
}

export default function TatModal({ open, onClose, tatData }: TatModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open || !mounted) return null;

  const totalTatTime = tatData.reduce((acc, curr) => acc + curr.time, 0);

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in zoom-in duration-200">
        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">
            Turnaround Time (TAT)
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
  {/* Header */}
  <thead className="bg-gray-100 text-gray-700">
    <tr>
      <th className="px-4 py-3 border border-gray-300 text-center w-16 whitespace-nowrap">
        Sr No
      </th>
      <th className="px-4 py-3 border border-gray-300 text-left whitespace-nowrap">
        Status
      </th>
      <th className="px-4 py-3 border border-gray-300 text-center whitespace-nowrap">
        Assigned By
      </th>
      <th className="px-4 py-3 border border-gray-300 text-center whitespace-nowrap">
        TAT Time
      </th>
    </tr>
  </thead>

  {/* Body */}
  <tbody>
    {tatData.map((item, index) => (
      <tr key={item.id} className="hover:bg-gray-50 transition">
        <td className="px-4 py-3 border border-gray-300 text-center font-semibold">
          {index + 1}
        </td>

        <td className="px-4 py-3 border border-gray-300">
          {item.status}
        </td>

        <td className="px-4 py-3 border border-gray-300 text-center">
          {item.assignedBy}
        </td>

        <td className="px-4 py-3 border border-gray-300 text-center font-bold text-teal-600">
          {item.time} Hrs
        </td>
      </tr>
    ))}
  </tbody>

  {/* Footer */}
  <tfoot>
    <tr className="bg-teal-50">
      <td
        colSpan={3}
        className="px-4 py-3 border border-gray-300 font-bold text-right"
      >
        Total TAT
      </td>
      <td className="px-4 py-3 border border-gray-300 text-center font-extrabold text-teal-700">
        {totalTatTime} Hrs
      </td>
    </tr>
  </tfoot>
</table>

        </div>
      </div>
    </div>,
    document.body
  );
}
