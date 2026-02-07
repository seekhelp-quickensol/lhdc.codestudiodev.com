"use client";
import React from "react";
import { Modal } from "@/src/components/admin/ui/modal";
import { useModal } from "@/src/hooks/admin/useModal";

interface ViewRemarkProps {
  remarkText: string;
  date?: string;
}

export default function ViewRemarkButton({ remarkText, date }: ViewRemarkProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {/* 1. The Trigger Button (To be placed in your table row) */}
      <button
        onClick={openModal}
        className="inline-flex items-center gap-2 bg-teal-600 text-white hover:bg-teal-600 hover:text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 uppercase tracking-wide"
      >
       
        View 
      </button>

      {/* 2. The Pop-up Modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-md w-full"
      >
        <div className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-teal-100 p-3 rounded-full text-teal-600 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-800">Site Visit Remark</h4>
            {date && <p className="text-sm text-gray-500 mt-1">Visit Date: {date}</p>}
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">
              Remark Details
            </label>
            <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-700 italic leading-relaxed min-h-[120px]">
              "{remarkText || "No remark available for this visit."}"
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={closeModal}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}