"use client";

import { TableColumn } from "react-data-table-component";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import StatusBadge from "@/src/components/admin/StatusBadge";
import TatModal from "@/src/components/admin/TatModal";
import { useState } from "react";

const sampleResponse = {
  recordsFiltered: 5,
  data: [
    [
      1,
      201,
      "Rahul Patel",
      "hi-7689229037",
      "9876543210",
      "rahul@gmail.com",
      "Completed",
      "2BHK Renovation",
      "2025-01-25 10:30 AM",  // Submitted Date
      "2025-01-28 02:15 PM",  // Last Update Date & Time
    ],
    [
      2,
      202,
      "Anita Sharma",
      "hi-7689229037",
      "9123456789",
      "anita@gmail.com",
      "Pending",
      "Kitchen Upgrade",
      "2025-01-24 03:15 PM",
      "2025-01-26 11:40 AM",
    ],
    [
      3,
      203,
      "Amit Verma",
      "hi-6892290737",
      "9988776655",
      "amit@gmail.com",
      "Approved",
      "Bathroom Repair",
      "2025-01-23 11:00 AM",
      "2025-01-25 04:50 PM",
    ],
    [
      4,
      204,
      "Neha Singh",
      "hi-2297689037",
      "9090909090",
      "neha@gmail.com",
      "Rejected",
      "Full House Painting",
      "2025-01-22 06:45 PM",
      "2025-01-23 09:30 AM",
    ],
    [
      5,
      205,
      "Rohit Mehta",
      "hi-8769229037",
      "9555667788",
      "rohit@gmail.com",
      "Draft",
      "Electrical Work",
      "2025-01-21 09:20 AM",
      "2025-01-21 09:20 AM",
    ],
  ],
};

const tatData = [
  {
    id: 1,
    status: "Application Submitted - Document Verification",
    assignedBy: "Rahul Kale",
    time: 4,
  },
  {
    id: 2,
    status: "Document Verification - Site Visit Scheduled",
    assignedBy: "Neha Kulkarni",
    time: 7,
  },
  {
    id: 3,
    status: "Site Visit Scheduled - Under Final Review",
    assignedBy: "Amit Patil",
    time: 9,
  },
  {
    id: 4,
    status: "Under Final Review - Application Rejected",
    assignedBy: "Pooja Deshmukh",
    time: 5,
  },
  {
    id: 5,
    status: "Application Rejected - Re-application Filed",
    assignedBy: "Rohit Mehta",
    time: 6,
  },
  {
    id: 6,
    status: "Re-application Filed - Document Verification",
    assignedBy: "Sneha Kulkarni",
    time: 8,
  },
];



// Map status to badge colors
const statusColorMap: Record<string, string> = {
  Active: "bg-teal-100 text-teal-800",
  Inactive: "bg-gray-100 text-gray-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Draft: "bg-blue-100 text-blue-800",
  Approved: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
  Completed: "bg-purple-100 text-purple-800",
  Cancelled: "bg-pink-100 text-pink-800",
};

export default function FirstTimeHomeBuyerAssistanceList() {
  const router = useRouter();
  const [isTatModalOpen, setIsTatModalOpen] = useState(false);
   const totalTatTime = tatData.reduce((acc, curr) => acc + curr.time, 0);

  const columns: TableColumn<any>[] = [
    {
      name: "Sr. No.",
      selector: (row) => row[0],
      width: "80px",
    },
    {
      name: "Applicant’s Name",
      selector: (row) => row[2],
      sortable: true,
    },
    {
      name: "Applicant’s No",
      selector: (row) => row[3],
      sortable: true,
    },
    {
      name: "Phone No",
      selector: (row) => row[4],
    },
    {
      name: "Email",
      selector: (row) => row[5],
    },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            statusColorMap[row[6]] || "bg-gray-100 text-gray-800"
          }`}
        >
          {row[6]}
        </span>
      ),
    },
     {
      name: "Detail",
      cell: (row) => (
        <button
          onClick={() =>
            router.push("/admin/first-time-home-buyer-assistance-details")
          }
           className="bg-teal-600  text-white hover:bg-gray-50 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition shadow-sm"
          title="View Details"
        >
          <AiOutlineEye size={14} />
          View
        </button>
      ),
    },
    {
      name: "Application Date Time",
      selector: (row) => row[8],
    },
    {
      name: "Last Update Date Time",
      selector: (row) => row[9],
    },
    {
  name: "TAT ",
  cell: () => (
    <span
      onClick={() => setIsTatModalOpen(true)}
      className="cursor-pointer text-sm font-semibold  text-blue-600 transition"
      title="Click to view TAT details"
    >
      {totalTatTime} Hrs
    </span>
  ),
},
  ];

  return (
    <div className="table-container max-w-full overflow-x-auto">
      <CustomDataTable
        tableName="First-Time Home Buyer Assistance (Static)"
        url="" // ignored in demoMode
        columns={columns}
        demoMode={true}
        sampleResponse={sampleResponse}
        search={false}
      />

      <TatModal
              open={isTatModalOpen}
              onClose={() => setIsTatModalOpen(false)}
              tatData={tatData}
            />
    </div>
  );
}
