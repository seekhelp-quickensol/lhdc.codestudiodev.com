"use client";

import React, { useMemo, useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Loader2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
} from "lucide-react";
import ComponentCard2 from "@/src/components/admin/common/ComponentCard2";

/* ================= TYPES ================= */
type TimelineStatus = "Completed" | "In Progress" | "Rejected" | "Pending";

type TimelineItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  status: TimelineStatus;
};

type SnakeRow = {
  items: TimelineItem[];
  isEvenRow: boolean;
  isFull: boolean;
};

/* ================= DATA ================= */
const timelineData: TimelineItem[] = [
  { id: 1, title: "Application Submitted", description: "Initial application submitted.", date: "10 Jan 2026", status: "Completed" },
  { id: 2, title: "Application Rejected", description: "Documents were incomplete.", date: "11 Jan 2026", status: "Rejected" },
  { id: 3, title: "Re-application Filed", description: "User updated documents.", date: "12 Jan 2026", status: "Completed" },
  { id: 4, title: "Document Verification", description: "Legal team is verifying deeds.", date: "13 Jan 2026", status: "Completed" },
  { id: 5, title: "Site Visit Scheduled", description: "Inspector assigned.", date: "14 Jan 2026", status: "Completed" },
  { id: 6, title: "Under Final Review", description: "With senior administrator.", date: "16 Jan 2026", status: "Completed" },
  { id: 7, title: "Approval Granted", description: "Application approved by authority.", date: "18 Jan 2026", status: "Completed" },
  { id: 8, title: "Agreement Signed", description: "Applicant signed funding agreement.", date: "19 Jan 2026", status: "Completed" },
  { id: 9, title: "Fund Disbursement", description: "Loan amount released to applicant.", date: "21 Jan 2026", status: "Completed" },
  { id: 10, title: "Project Completed", description: "Home improvement work completed.", date: "28 Jan 2026", status: "In Progress" },
];

/* ================= ICON ================= */
const StatusIcon = ({ status }: { status: TimelineStatus }) => {
  switch (status) {
    case "Completed":
      return <CheckCircle2 className="w-4 h-4 text-teal-600" />;
    case "In Progress":
      return <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />;
    case "Rejected":
      return <XCircle className="w-4 h-4 text-red-600" />;
    default:
      return <Circle className="w-4 h-4 text-gray-300" />;
  }
};

/* ================= COLS HOOK ================= */
function useCols(): number {
  const [cols, setCols] = useState<number>(4);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(3);
      else setCols(4);
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  return cols;
}

/* ================= COMPONENT ================= */
export default function HomeImprovementProgramTimeline() {
  const cols = useCols();

  const snakeRows = useMemo<SnakeRow[]>(() => {
    const rows: SnakeRow[] = [];
    const totalRows = Math.ceil(timelineData.length / cols);

    for (let row = 0; row < totalRows; row++) {
      const start = row * cols;
      const slice = timelineData.slice(start, start + cols);

      const isEvenRow = row % 2 === 0;
      const rowItems = isEvenRow ? slice : [...slice].reverse();

      rows.push({
        items: rowItems,
        isEvenRow,
        isFull: slice.length === cols,
      });
    }

    return rows;
  }, [cols]);

  return (
    <ComponentCard2 title="Application Activity" desc="Snake Flow Timeline">
      <div className="p-6 space-y-14">
        {snakeRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`
              relative grid gap-x-10 gap-y-14
              ${cols === 4 ? "lg:grid-cols-4 md:grid-cols-2 grid-cols-1" : ""}
              ${cols === 3 ? "md:grid-cols-3 grid-cols-1" : ""}
              ${cols === 1 ? "grid-cols-1" : ""}
              ${!row.isEvenRow && !row.isFull && cols > 1 ? "lg:justify-items-end" : ""}
            `}
          >
            {!row.isEvenRow &&
              !row.isFull &&
              Array.from({ length: cols - row.items.length }).map((_, i) => (
                <div key={`spacer-${i}`} />
              ))}

            {row.items.map((dataItem: TimelineItem, colIndex: number) => {
              const isLastOverall =
                rowIndex === snakeRows.length - 1 &&
                colIndex === row.items.length - 1;

              const isRejected = dataItem.status === "Rejected";
              const isInProgress = dataItem.status === "In Progress";
              const isCompleted = dataItem.status === "Completed";

              return (
                <div key={dataItem.id} className="relative overflow-visible">
                  <div
                    className={`
                      relative z-10 p-5 rounded-xl border bg-white hover:shadow-md transition
                      ${isCompleted ? "border-teal-300 bg-teal-50/40" : ""}
                      ${isRejected ? "border-red-300 bg-red-50/40" : ""}
                      ${isInProgress ? "border-blue-300 bg-blue-50 shadow ring-1 ring-blue-200" : ""}
                    `}
                  >
                    <div
                      className={`
                        absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center
                        ${isCompleted ? "border-teal-300" : ""}
                        ${isRejected ? "border-red-300" : ""}
                        ${isInProgress ? "border-blue-300" : ""}
                      `}
                    >
                      <StatusIcon status={dataItem.status} />
                    </div>

                    <span className="text-[10px] font-semibold text-gray-400 uppercase">
                      {dataItem.date}
                    </span>

                    <h3 className="text-sm font-bold mt-1 text-gray-800">
                      {dataItem.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {dataItem.description}
                    </p>

                    <span
                      className={`
                        inline-block mt-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                        ${isCompleted ? "bg-teal-600 text-white" : ""}
                        ${isInProgress ? "bg-blue-600 text-white animate-pulse" : ""}
                        ${isRejected ? "bg-red-600 text-white" : ""}
                      `}
                    >
                      {dataItem.status}
                    </span>
                  </div>

                  {!isLastOverall && (
                    <div className="hidden lg:block absolute inset-0 pointer-events-none">
                      {((row.isEvenRow && colIndex === row.items.length - 1) ||
                        (!row.isEvenRow && colIndex === 0)) ? (
                        <ArrowDown className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-400 w-6 h-6" />
                      ) : row.isEvenRow ? (
                        <ArrowRight className="absolute top-1/2 -right-8 -translate-y-1/2 text-gray-400 w-6 h-6" />
                      ) : (
                        <ArrowLeft className="absolute top-1/2 -left-8 -translate-y-1/2 text-gray-400 w-6 h-6" />
                      )}
                    </div>
                  )}

                  {!isLastOverall && cols === 1 && (
                    <div className="flex justify-center py-4">
                      <ArrowDown className="text-gray-400 w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </ComponentCard2>
  );
}
