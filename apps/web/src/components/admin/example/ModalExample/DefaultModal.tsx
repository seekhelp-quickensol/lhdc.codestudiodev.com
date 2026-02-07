"use client";
import React, { useState } from "react";
import { Modal } from "@/src/components/admin/ui/modal";
import { useModal } from "@/src/hooks/admin/useModal";
import Select from "../../form/Select";

export default function DefaultModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const [status, setStatus] = useState<string | number>("");
  const [remark, setRemark] = useState<string>("");

  const statusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Draft", label: "Draft" },
    { value: "Approve", label: "Approve" },
    { value: "Reject", label: "Reject" },
    // { value: "On Hold", label: "On Hold" },
    { value: "Complete", label: "Complete" },
  ];

  const handleSave = () => {
    console.log("Selected:", status, remark);
    closeModal();
  };

  return (
    <div className="p-4">
      <button
        onClick={openModal}
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg"
      >
        Update Status
      </button>

 <Modal
  isOpen={isOpen}
  onClose={closeModal}
  className="max-w-md w-full overflow-hidden rounded-2xl shadow-2xl transition-all"
>
  <div className="bg-white px-6 py-7 sm:p-8">
    {/* Header */}
    <div className="mb-6">
      <h4 className="text-2xl font-extrabold text-gray-900 tracking-tight">
        Update Status
      </h4>
      <p className="mt-1 text-sm text-gray-500">
        Please provide the latest update and any relevant notes.
      </p>
    </div>

    {/* Form Fields */}
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">
          Current Status
        </label>
        <Select
          options={statusOptions}
          value={status}
          onChange={(val) => setStatus(val)}
          placeholder="Select Status..."
          className="hover:border-teal-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">
          Internal Remark
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none transition-all duration-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 min-h-[120px] resize-none"
          placeholder="What's the context behind this change?"
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
        onClick={handleSave}
        className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold px-7 py-2.5 rounded-xl shadow-md shadow-teal-500/20 transition-all active:scale-95"
      >
        Save Changes
      </button>
    </div>
  </div>
</Modal>
    </div>
  );
}