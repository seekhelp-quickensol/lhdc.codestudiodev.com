"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";
import HomeImprovementProgramDetailList from "./home-improvement-program-details";
import HomeImprovementProgramTimeline from "./home-improvement-program-timeline";

export default function HomeImprovementProgramDetail() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-x-hidden">
      <ComponentCard
        title="Home Improvement Program Details"
        desc="View complete application details"
      >
        {/* 👇 IMPORTANT */}
        <div className="flex flex-col gap-6 w-full max-w-full min-w-0 overflow-x-hidden">

          <div className="w-full max-w-full min-w-0 overflow-x-hidden">
            <HomeImprovementProgramDetailList />
          </div>

          <div className="w-full max-w-full min-w-0 overflow-x-hidden">
            <HomeImprovementProgramTimeline />
          </div>

        </div>
      </ComponentCard>
    </div>
  );
}
