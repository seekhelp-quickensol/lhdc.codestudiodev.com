"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Input from "@/src/components/admin/form/input/InputField";

// --- 1. Sub-Component: Delete Confirmation Modal ---
// This uses createPortal to ensure it's always centered in the viewport
const DeleteConfirmationModal = ({ isOpen, onConfirm, onCancel, fileName }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onCancel} 
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl transition-all transform duration-300 scale-100">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-4 text-red-500">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900">Remove Document?</h3>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Are you sure you want to remove <br/>
            <span className="font-semibold text-gray-800 break-all">"{fileName}"</span>?
            <br/> This action cannot be undone.
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition active:scale-95"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition shadow-lg shadow-red-200 active:scale-95"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// --- 2. Main Page Component ---
interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

export default function AgreementDocumentStep() {
  const [documents, setDocuments] = useState<UploadedFile[]>([]);
  const [deletingDocId, setDeletingDocId] = useState<string | null>(null);

  const handleAddDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
      }));
      setDocuments((prev) => [...prev, ...newFiles]);
    }
  };

  const confirmDelete = (id: string) => {
    setDeletingDocId(id);
  };

  const handleRemoveDocument = () => {
    if (deletingDocId) {
      setDocuments((prev) => prev.filter((doc) => doc.id !== deletingDocId));
      setDeletingDocId(null);
    }
  };

  const activeDocName = documents.find(d => d.id === deletingDocId)?.name;

  return (
    <div className="p-6 space-y-8 bg-white rounded-xl relative">
      
      {/* Centered Deletion Confirmation */}
      <DeleteConfirmationModal 
        isOpen={!!deletingDocId}
        fileName={activeDocName}
        onConfirm={handleRemoveDocument}
        onCancel={() => setDeletingDocId(null)}
      />

      <h3 className="text-xl font-bold text-gray-800 border-b pb-4">
        Upload Agreement Document
      </h3>

      {/* Financial Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Total Contract Award ($)</label>
          <Input placeholder="0.00" type="number" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">LHDC Contribution ($)</label>
          <Input placeholder="0.00" type="number" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Client Contribution ($)</label>
          <Input placeholder="0.00" type="number" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Total Dollar Leverage ($)</label>
          <Input placeholder="0.00" type="number" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">$ Leveraged per $LHDC </label>
          <Input placeholder="0.00" type="number" />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Agreement Document Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-800">Agreement Documents</h4>
          <label className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer flex items-center gap-2 shadow-sm">
            <span>+ Add Document</span>
            <input type="file" multiple className="hidden" onChange={handleAddDocument} />
          </label>
        </div>

        {/* Displaying Saved Documents */}
          {documents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <div 
                  key={doc.id} 
                  className="relative group border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-teal-500 hover:shadow-md transition-all"
                >
                  {/* Remove Button */}
                  <button 
                    onClick={() => confirmDelete(doc.id)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-start gap-3">
                    <div className="bg-teal-100 p-3 rounded-lg text-teal-700">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 truncate" title={doc.name}>
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{doc.size}</p>
                      
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        {documents.length === 0 && (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-gray-400 italic bg-gray-50/30">
            No documents attached. Click "Add Document" to begin.
          </div>
        )}
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <button
          type="button"
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-3 rounded-lg shadow-lg transition transform active:scale-95"
          onClick={() => alert("Agreement and Documents Saved!")}
        >
          Save Agreement
        </button>
      </div>
    </div>
  );
}