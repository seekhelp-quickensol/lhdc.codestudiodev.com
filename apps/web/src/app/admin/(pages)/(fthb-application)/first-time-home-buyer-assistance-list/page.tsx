"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";
import FirstTimeHomeBuyerAssistanceList from "./first-time-home-buyer-assistance-list";




export default function FirstTimeHomeBuyerAssistance() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="First-Time Home Buyer Assistance List"
        desc="View, edit, and manage all First-Time Home Buyer Assistance."
      >
        <FirstTimeHomeBuyerAssistanceList />
      </ComponentCard>
    </div>
  );
}