"use client";

import Input from "@/src/components/admin/form/input/InputField";
import { useState } from "react";

const quotations = [
  {
    id: 1,
    name: "Quotation 1",
    file: "quotation1.pdf",
  },
  {
    id: 2,
    name: "Quotation 2",
    file: "quotation2.pdf",
  
  },
  {
    id: 3,
    name: "Quotation 3",
    file: "quotation3.pdf",
   
  },
];

export default function ContractQuotationStep() {
  const [selectedQuotation, setSelectedQuotation] = useState<number | null>(
    null
  );

  const handleSubmit = () => {
    if (selectedQuotation === null) return;
    alert(`Submitted Quotation ${selectedQuotation}`);
  };

  return (
    <div className="p-6 min-h-[260px] space-y-6">
      <h3 className="text-xl font-bold text-gray-800 border-b pb-4">
        Contract Quotation
      </h3>

      <div className="space-y-4">
        {quotations.map((quote) => (
          <div
            key={quote.id}
            className="overflow-hidden border border-gray-200 rounded-xl bg-white"
          >
            <table className="w-full text-sm">
              <tbody>
                {/* Quotation Row */}
                <tr className="border-b last:border-b-0">
                  <td className="bg-gray-50 px-4 py-3 w-1/3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="quotation"
                        value={quote.id}
                        checked={selectedQuotation === quote.id}
                        onChange={() => setSelectedQuotation(quote.id)}
                        className="form-radio h-4 w-4 text-teal-600"
                      />
                      <span className="font-medium text-gray-800">
                        {quote.name}
                      </span>
                    </label>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1.5 rounded-lg text-sm font-medium transition"
                      onClick={() => alert(`Download ${quote.file}`)}
                    >
                      Download
                    </button>
                  </td>
                </tr>

                {/* Remark Row: show ONLY if this quotation is selected */}
                {selectedQuotation === quote.id && (
                  <tr>
                    <td className="bg-gray-50 px-4 py-3 font-medium text-gray-700">
                      Remark
                    </td>
                    <td className="px-4 py-3 text-gray-900 italic">
                     <Input placeholder="Enter remark about quotation..."/>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="button"
          disabled={selectedQuotation === null}
          onClick={handleSubmit}
          className={`px-6 py-2 rounded-lg font-semibold text-white shadow-sm transition
            ${
              selectedQuotation
                ? "bg-teal-600 hover:bg-teal-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
