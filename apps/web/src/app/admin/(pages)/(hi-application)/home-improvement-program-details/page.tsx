"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";
import HomeImprovementProgramDetailList from "./home-improvement-program-details";
import HomeImprovementProgramTimeline from "./home-improvement-program-timeline";
import DefaultModal from "@/src/components/admin/example/ModalExample/DefaultModal";
import FormInModal from "@/src/components/admin/example/ModalExample/FormInModal";

export default function HomeImprovementProgramDetail() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6 my">
    
        {/* ===== HEADER: Title, Desc + Button ===== */}
        <div className="px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          {/* Left: Title & Description */}
          <div>
            <h3 className="text-2xl font-medium text-primary dark:text-white/90">
              Home Improvement Program Details
            </h3>
            <p className="mt-1 text-sm text-secondary dark:text-gray-400">
              View complete application details
            </p>
          </div>

          {/* Right: Update Status Button */}
          <div>
           <DefaultModal />
          </div>

          
 
       
          

        </div>

        {/* ===== 70 / 30 Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
          {/* LEFT SECTION (70%) */}
          <div className="lg:col-span-7 space-y-4">
            <HomeImprovementProgramDetailList />
          </div>

          {/* RIGHT SECTION (30%) */}
          <div className="lg:col-span-3 space-y-4 sticky top-6 h-fit">
            <HomeImprovementProgramTimeline />
          </div>
        </div>

        </div>

    </div>
  );
}
