"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";


import HomeImprovementProgramList from "./home-improvement-program-list";

export default function HomeImprovementProgram() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="Home Improvement Program List"
        desc="View, edit, and manage all Home Improvement Program."
      >
        <HomeImprovementProgramList />
      </ComponentCard>
    </div>
    // <h1>adas</h1>

  );
}