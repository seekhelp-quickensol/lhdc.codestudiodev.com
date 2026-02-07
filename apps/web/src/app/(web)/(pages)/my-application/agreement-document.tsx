"use client";

import React from "react";

// ---------- Main Component ----------
export default function AgreementDocument() {

  // Static agreement documents
  const documents = [
    { id: "a1", name: "Agreement_Company_A.pdf", size: "215 KB" },
    { id: "a2", name: "Agreement_Company_B.pdf", size: "198 KB" },
    { id: "a3", name: "Agreement_Company_C.pdf", size: "172 KB" },
    { id: "a4", name: "Agreement_Company_D.pdf", size: "200 KB" },
  ];

  const handleDownload = (docName: string) => {
    alert(`Download ${docName} clicked!`);
    // In future, implement actual download logic here
  };

  return (
    <div className="space-y-8 bg-white rounded-xl relative">

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">Agreement Document</h3>
        </div>

        {/* Display static documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="relative group border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-white hover:border-teal-500 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-3 rounded-lg text-teal-700">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate" title={doc.name}>{doc.name}</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
  <p className="text-xs text-gray-500">{doc.size}</p>

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

              {/* Download button */}
              {/* <button
                onClick={() => handleDownload(doc.name)}
                className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold py-2 px-4 rounded-xl shadow-sm transition active:scale-95"
              >
                Download
              </button> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
