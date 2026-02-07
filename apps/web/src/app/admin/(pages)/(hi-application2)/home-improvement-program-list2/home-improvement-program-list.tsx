"use client";

import { TableColumn } from "react-data-table-component";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

import CustomDataTable from "@/src/components/admin/tables/customTableComponent";
import StatusBadge from "@/src/components/admin/StatusBadge";

const sampleResponse = {
  recordsFiltered: 5,
  data: [
    [
      1,
      201,
      "Rahul Patel",
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
      "9555667788",
      "rohit@gmail.com",
      "Draft",
      "Electrical Work",
      "2025-01-21 09:20 AM",
      "2025-01-21 09:20 AM",
    ],
  ],
};


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

export default function HomeImprovementProgramList() {
  const router = useRouter();

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
      name: "Phone No",
      selector: (row) => row[3],
    },
    {
      name: "Email",
      selector: (row) => row[4],
    },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            statusColorMap[row[5]] || "bg-gray-100 text-gray-800"
          }`}
        >
          {row[5]}
        </span>
      ),
    },
    {
      name: "Detail",
      cell: (row) => (
        <button
          onClick={() =>
            router.push("/admin/home-improvement-program-details2")
          }
          className="flex items-center gap-1 px-3 py-1 text-xs font-medium
                     text-white bg-blue-600 rounded
                     hover:bg-blue-700 transition"
          title="View Details"
        >
          <AiOutlineEye size={14} />
          View
        </button>
      ),
    },
    {
      name: "Application Date Time",
      selector: (row) => row[7],
    },
    {
      name: "Last Update Date Time",
      selector: (row) => row[8],
    },
  ];

  return (
    <div className="table-container max-w-full overflow-x-auto">
      <CustomDataTable
        tableName="Home Improvement Program (Static)"
        url="" // ignored in demoMode
        columns={columns}
        demoMode={true}
        sampleResponse={sampleResponse}
        search={false}
      />
    </div>
  );
}
