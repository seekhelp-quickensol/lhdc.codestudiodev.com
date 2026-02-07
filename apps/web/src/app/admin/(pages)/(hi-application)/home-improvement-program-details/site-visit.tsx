"use client";


import ActionButton from "@/src/components/admin/ui/button/ActionButton";
import { DownloadIcon } from "lucide-react";
import ViewRemarkButton from "./view-remar";
import SiteVisitUploadModal from "@/src/components/admin/SiteVisitUploadModal";

const siteVisitData = [
  {
    id: 1,
    date: "2026-02-01",
    file: "site_photo_1.jpg",
    remark: "Initial application submitted for review.",
  },
  {
    id: 2,
    date: "2026-02-05",
    file: "site_photo_2.jpg",
    remark: "Documents were incomplete. Missing property tax proof.",
  },
];

export default function SiteVisitStep() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
      <h3 className="text-xl font-bold text-gray-800  ">
        Site Visit Details
      </h3>
     

          <SiteVisitUploadModal/>
      </div>


      <div className="overflow-x-auto    bg-white">
        <table className="w-full text-sm border-collapse">
          {/* Header */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border whitespace-nowrap border-gray-300 text-center w-16">
                Sr No
              </th>
              <th className="px-4 py-3 border border-gray-300 text-left">
                Date
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Files
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Remark
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {siteVisitData.map((visit, index) => (
              <tr key={visit.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {index + 1}
                </td>

                <td className="px-4 py-3 border border-gray-300">
                  {new Date(visit.date).toLocaleDateString("en-GB")}
                </td>

                <td className="px-4 py-3 border border-gray-300">
                  <div className="flex justify-center gap-2">
                    <ActionButton  title="Download" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
                      <DownloadIcon size={15} />
                    </ActionButton>

                    <ActionButton  title="Download" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
                      <DownloadIcon size={15} />
                    </ActionButton>
                    <ActionButton  title="Download" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm" >
                      <DownloadIcon size={15} />
                    </ActionButton>
                    <ActionButton  title="Download" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm" >
                      <DownloadIcon size={15} />
                    </ActionButton>
                  </div>
                </td>

                <td className="px-4 py-3 border border-gray-300 text-center">
                  <ViewRemarkButton
                    remarkText={visit.remark}
                    date={new Date(visit.date).toLocaleDateString("en-GB")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
