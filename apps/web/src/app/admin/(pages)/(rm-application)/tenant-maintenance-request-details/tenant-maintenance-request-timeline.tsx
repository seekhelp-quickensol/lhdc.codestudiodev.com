"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, Circle, Loader2, XCircle, RefreshCcw } from "lucide-react";
import ComponentCard2 from "@/src/components/admin/common/ComponentCard2";

const timelineData = [
  { id: 1, title: "Application Submitted", description: "Initial application submitted for review.", date: "10 Jan 2026 • 09:00 AM", status: "Completed" },
  { id: 2, title: "Application Rejected", description: "Documents were incomplete. Missing property tax proof.", date: "11 Jan 2026 • 04:30 PM", status: "Rejected" },
  { id: 3, title: "Re-application Filed", description: "User updated documents and re-submitted.", date: "12 Jan 2026 • 10:32 AM", status: "Completed" },
  { id: 4, title: "Document Verification", description: "Legal team is verifying property deeds.", date: "13 Jan 2026 • 09:15 AM", status: "Completed" },
  { id: 5, title: "Site Visit Scheduled", description: "Inspector assigned for property evaluation.", date: "14 Jan 2026 • 02:00 PM", status: "Completed" },
  { id: 6, title: "Under Final Review", description: "Application is with the senior administrator.", date: "16 Jan 2026 • 03:45 PM", status: "In Progress" },
  // { id: 7, title: "Approval & Funding", description: "Final approval and grant disbursement.", date: "Pending", status: "Pending" },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "Completed": return <CheckCircle2 className="w-5 h-5 text-teal-600 fill-teal-50" />;
    case "In Progress": return <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />;
    case "Rejected": return <XCircle className="w-5 h-5 text-red-600 fill-red-50" />;
    default: return <Circle className="w-5 h-5 text-gray-300 fill-white" />;
  }
};

export default function TenantMaintenanceRequestTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (

    <>
<div className="relative bg-white rounded-xl border border-gray-200 shadow-sm p-3.5 space-y-2">
  <h3 className="text-xl font-medium text-primary dark:text-white/90">
    Applicant Information
  </h3>

  <div className="space-y-1">
    <p className="text-sm text-gray-600 flex items-center gap-1">
      <span className="min-w-[130px]">Applicant’s Name :</span>
      <strong className="text-gray-900 font-semibold truncate">
        Rahul Patel
      </strong>
    </p>

    <p className="text-sm text-gray-600 flex items-center gap-1">
      <span className="min-w-[130px]">Applicant’s No :</span>
      <strong className="text-gray-900 font-semibold truncate">
        rm-7689229037
      </strong>
    </p>
  </div>
</div>


    <ComponentCard2 title="Application Activity" desc="Historical logs">
     
      <div 
        ref={containerRef}
        className="timeline-container relative mt-4  overflow-y-auto pr-4 "
        // h-[500px]
      >
        <div style={{ direction: 'ltr' }}>
          {/* Vertical Connecting Line */}
          <div className="absolute left-[25px] top-2 bottom-2 w-0.5 bg-gray-100" />

          <div className="space-y-4">
            {[...timelineData].reverse().map((item) => {
  const isRejected = item.status === "Rejected";
  const isInProgress = item.status === "In Progress";
  const isCompleted = item.status === "Completed";

  return (
    <div key={item.id} className="relative flex items-start group">
                  {/* Icon with white background to mask the line */}
                  <div className="relative z-10 flex items-center justify-center bg-white p-1 ml-[-4px]">
                    <StatusIcon status={item.status} />
                  </div>

                  {/* Content Card - Professional Stepper Style */}
                  <div className={`
                    ml-4 p-4 rounded-xl border transition-all duration-200 w-full
                    ${isCompleted ? "border-teal-200 bg-teal-50/30 hover:bg-teal-50/60" : ""}
                    ${isRejected ? "border-red-200 bg-red-50/40" : ""}
                    ${isInProgress ? "border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-200" : "border-gray-100"}
                    ${item.status === "Pending" ? "bg-white border-dashed opacity-60" : "bg-white"}
                  `}>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1">
                      <h3 className={`text-sm font-bold leading-tight
                        ${isRejected ? "text-red-700" : isInProgress ? "text-blue-700" : isCompleted ? "text-teal-900" : "text-gray-700"}
                      `}>
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-wider uppercase
                        ${isCompleted ? 'bg-teal-600 text-white' : 
                          isInProgress ? 'bg-blue-600 text-white animate-pulse' : 
                          isRejected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400'}
                      `}>
                        {item.status}
                      </span>

                      {isRejected && (
                        <button className="flex items-center gap-1 text-[10px] font-bold text-red-600 hover:text-red-800 transition-colors uppercase">
                          <RefreshCcw className="w-3 h-3" /> Re-fill App
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Left Scrollbar Styling */}
        <style jsx>{`
          .timeline-container::-webkit-scrollbar {
            width: 6px;
          }
          .timeline-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .timeline-container::-webkit-scrollbar-thumb {
            background: #cbd5e1; /* Slate 300 */
            border-radius: 10px;
          }
          .timeline-container::-webkit-scrollbar-thumb:hover {
            background: #94a3b8; /* Slate 400 */
          }
        `}</style>
      </div>
    </ComponentCard2>
    </>
  );
}