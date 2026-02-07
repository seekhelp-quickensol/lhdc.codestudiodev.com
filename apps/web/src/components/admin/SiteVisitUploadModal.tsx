"use client";
import React, { useState } from "react";
import { Modal } from "@/src/components/admin/ui/modal";
import { useModal } from "@/src/hooks/admin/useModal";
import DatePicker from "./form/date-picker";

export default function SiteVisitUploadModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const [visitDate, setVisitDate] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [remark, setRemark] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = () => {
    console.log("Date:", visitDate);
    console.log("Files:", files);
    console.log("Remark:", remark);
    closeModal();
  };

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

const openDeleteConfirm = (index: number) => {
  setDeleteIndex(index);
};

const closeDeleteConfirm = () => {
  setDeleteIndex(null);
};

const confirmDelete = () => {
  if (deleteIndex === null) return;
  setFiles((prev) => prev.filter((_, i) => i !== deleteIndex));
  closeDeleteConfirm();
};


  return (
    <div className="">
      <button
        onClick={openModal}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm- font-medium transition cursor-pointer flex items-center gap-2 shadow-sm"
      >
        Upload Site Visit
      </button>

      <Modal
  isOpen={deleteIndex !== null}
  onClose={closeDeleteConfirm}
  className="max-w-sm w-full overflow-hidden rounded-2xl shadow-2xl"
>
  <div className="bg-white px-6 py-6">
    <h4 className="text-lg font-bold text-gray-900">
      Remove File?
    </h4>
    <p className="mt-2 text-sm text-gray-600">
      Are you sure you want to remove this file?
    </p>

    {deleteIndex !== null && (
      <p className="mt-2 text-xs text-gray-500 truncate">
        {files[deleteIndex]?.name}
      </p>
    )}

    <div className="mt-6 flex justify-end gap-3">
      <button
        onClick={closeDeleteConfirm}
        className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
      >
        Cancel
      </button>
      <button
        onClick={confirmDelete}
        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  </div>
</Modal>


      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-md w-full overflow-hidden rounded-2xl shadow-2xl transition-all"
      >
        <div className="bg-white px-6 py-7 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h4 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Upload Site Visit
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Add site visit date, upload documents, and remarks.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Date */}
            <DatePicker
  id="siteVisitDate"
  label="Site Visit Date"
  placeholder="Select site visit date"
  value={visitDate}
  onChange={(val) => setVisitDate(val)}
/>


            {/* File Upload */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">
                Upload Documents (Multiple)
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full border border-dashed border-gray-300 rounded-xl px-4 py-3 text-gray-600 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-600 file:text-white hover:file:bg-teal-900 transition"
              />

 {files.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
    {files.map((file, index) => (
      <div
        key={index}
        className="relative group border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-teal-500 hover:shadow-md transition-all"
      >
        {/* Remove Button */}
        <button
          onClick={() => openDeleteConfirm(index)} // open confirm popup
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
            <p
              className="text-sm font-bold text-gray-800 truncate"
              title={file.name}
            >
              {file.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

            </div>

            {/* Remark */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">
                Remark
              </label>
              <textarea
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-teal-500 min-h-[120px] resize-none"
                placeholder="Add site visit notes..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors active:scale-95"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold px-7 py-2.5 rounded-xl shadow-md shadow-teal-500/20 transition-all active:scale-95"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
