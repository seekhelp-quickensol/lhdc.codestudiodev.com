"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Input from "@/src/components/admin/form/input/InputField";

const MIN_QUOTES = 3;
const MAX_QUOTES = 10;

const DeleteConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
  fileName,
}: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onCancel}
      />
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl transition-all transform duration-300 scale-100">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-4 text-red-500">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Remove Document?</h3>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Are you sure you want to remove <br />
            <span className="font-semibold text-gray-800 break-all">
              "{fileName}"
            </span>
            ?
            <br /> This action cannot be undone.
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
    document.body,
  );
};

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

// ---------- Main Component ----------
export default function UploadQuotation() {
  const [documents, setDocuments] = useState<UploadedFile[]>([]);
  const [deletingDocId, setDeletingDocId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);


  // Static quotation cards (hidden initially)
  const [showStaticQuotations, setShowStaticQuotations] = useState(false);

const handleAddDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const newFiles = Array.from(e.target.files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / 1024).toFixed(1) + " KB",
    }));

    setDocuments((prev) => {
      const total = prev.length + newFiles.length;

      if (total > MAX_QUOTES) {
        setErrorMsg(`You can upload maximum ${MAX_QUOTES} quotations only.`);
        return prev;
      }

      setErrorMsg(null);
      return [...prev, ...newFiles];
    });

    setIsUploading(false);  // ✅ hide dummy, show real docs again
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

  const handleSave = () => {
  if (documents.length < MIN_QUOTES) {
    setErrorMsg(`Please upload at least ${MIN_QUOTES} quotations before saving.`);
    setShowStaticQuotations(false);
    return;
  }

  if (documents.length > MAX_QUOTES) {
    setErrorMsg(`You can upload maximum ${MAX_QUOTES} quotations only.`);
    setShowStaticQuotations(false);
    return;
  }

  setErrorMsg(null);

  // ✅ After save → show dummy, hide real
  setShowStaticQuotations(true);
  setIsUploading(true);

  alert("Documents saved!");
};

  const activeDocName = documents.find((d) => d.id === deletingDocId)?.name;

  // Static 3 quotation cards
  const staticQuotations = [
    {
      id: "q1",
      name: "Quotation_Vendor_A_2398752395.pdf",
      size: "210 KB",
      status: "Approved",
    },
    {
      id: "q2",
      name: "Quotation_Vendor_B_2398752395.pdf",
      size: "180 KB",
      status: "Pending",
    },
    {
      id: "q3",
      name: "Quotation_Vendor_C_2398752395.pdf",
      size: "165 KB",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8 bg-white rounded-xl relative">
      {/* Delete Modal */}
      <DeleteConfirmationModal
        isOpen={!!deletingDocId}
        fileName={activeDocName}
        onConfirm={handleRemoveDocument}
        onCancel={() => setDeletingDocId(null)}
      />

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">Upload Quotation</h3>
          <label
  onClick={() => {
  setIsUploading(false);        // user is adding real files
  setShowStaticQuotations(false); // hide dummy
}}
  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer flex items-center gap-2 shadow-sm"
>
  <span>+ Add Quotation</span>
  <input
    type="file"
    multiple
    className="hidden"
    onChange={handleAddDocument}
  />
</label>

        </div>

        {/* Display uploaded documents */}
       {documents.length > 0 && !showStaticQuotations && (


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="relative group border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-teal-500 hover:shadow-md transition-all"
              >
                <button
                  onClick={() => confirmDelete(doc.id)}
                  className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-3 rounded-lg text-teal-700">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-bold text-gray-800 truncate"
                      title={doc.name}
                    >
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{doc.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!showStaticQuotations && documents.length === 0 && (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center bg-gray-50/30">
            <p className="text-gray-400 italic">
              No documents attached. Click "Add Document" to begin.
            </p>
          </div>
        )}

        {!showStaticQuotations &&
          documents.length > 0 &&
          documents.length < MIN_QUOTES && (
            <p className="text-sm font-semibold text-orange-600">
              Minimum {MIN_QUOTES} quotations required. You have uploaded{" "}
              {documents.length}.
            </p>
          )}

        {errorMsg && (
          <p className="text-sm font-semibold text-red-600">{errorMsg}</p>
        )}

        {/* Show static quotation cards only after clicking save */}
        {showStaticQuotations && (


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staticQuotations.map((q) => (
              <div
                key={q.id}
                className="group relative border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-teal-500 hover:shadow-md transition-all cursor-pointer overflow-visible"
              >
                {/* Top Right Status Icon & Tooltip */}
                {q.status === "Approved" && (
                  <div className="absolute -top-2 -right-2 z-20">
                    {/* The Checkmark Circle */}
                    <div className="bg-green-600 text-white rounded-full p-1.5 shadow-md border-2 border-white">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Sticky Tooltip */}
                    <div className="absolute bottom-full right-0 mb-3 hidden group-hover:flex flex-col items-end pointer-events-none animate-in fade-in slide-in-from-bottom-1 duration-200">
                      <div className="relative bg-gray-900/95 backdrop-blur-sm text-white text-[10px] tracking-wider uppercase py-1.5 px-3 rounded-md shadow-2xl border border-white/10 whitespace-nowrap">
                        Approved Quotation
                        {/* Tooltip Arrow - Centered better under the icon area */}
                        <div className="absolute top-full right-[7px] -mt-1">
                          <div className="border-4 border-transparent border-t-gray-900/95"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  {/* Document Icon */}
                  <div className="bg-teal-100 p-3 rounded-lg text-teal-700 shrink-0">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>

                  {/* Text Content - added pr-6 to prevent text hiding under the checkmark */}
                  <div className="flex-1 min-w-0 prn">
                    <p
                      className="text-sm font-bold text-gray-800 truncate"
                      title={q.name}
                    >
                      {q.name}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2">
  <p className="text-xs text-gray-500">{q.size}</p>

  <button
    onClick={(e) => {
      e.stopPropagation(); // prevent card click

    }}
    className="text-[11px] px-2 py-[2px] rounded-md border border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700 transition-all"
  >
    Download
  </button>
</div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <button
          type="button"
          disabled={
            documents.length < MIN_QUOTES || documents.length > MAX_QUOTES
          }
          className={`px-5 py-2 rounded-md text-white transition
      ${
        documents.length < MIN_QUOTES || documents.length > MAX_QUOTES
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-teal-600 hover:bg-teal-700"
      }`}
          onClick={handleSave}
        >
          Save Quotation
        </button>
      </div>
    </div>
  );
}
