"use client";

import { useStateContext } from "@/src/context/admin/StateContext";
import FirstTimeHomeBuyerAssistanceDetailList from "./first-time-home-buyer-assistance-details";
import FirstTimeHomeBuyerAssistanceTimeline from "./first-time-home-buyer-assistance-timeline";
import DefaultModal from "@/src/components/admin/example/ModalExample/DefaultModal";

export default function FirstTimeHomeBuyerAssistanceDetail() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6 my">
      {/* ===== HEADER: Title, Desc + Button ===== */}
      <div className="px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          {/* Left: Title & Description */}
          <div>
            <h3 className="text-2xl font-medium text-primary dark:text-white/90">
              First-Time Home Buyer Assistance Details
            </h3>
            <p className="mt-1 text-sm text-secondary dark:text-gray-400">
              View complete application details
            </p>
          </div>

          {/* Right: Action Button / Modal */}
          <div>
            <DefaultModal />
          </div>
        </div>

        {/* ===== 70 / 30 Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
          {/* LEFT SECTION (70%) */}
          <div className="lg:col-span-7 space-y-4">
            <FirstTimeHomeBuyerAssistanceDetailList />
          </div>

          {/* RIGHT SECTION (30%) */}
          <div className="lg:col-span-3 space-y-4 sticky top-6 h-fit">
            <FirstTimeHomeBuyerAssistanceTimeline />
          </div>
        </div>
      </div>
    </div>
  );
}
