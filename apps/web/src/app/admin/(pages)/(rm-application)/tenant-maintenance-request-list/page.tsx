"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";
import TenantMaintenanceRequestList from "./tenant-maintenance-request-list";




export default function HomeImprovementProgram() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="Tenant Maintenance Requests List"
        desc="View, edit, and manage all Tenant Maintenance Requests."
      >
        <TenantMaintenanceRequestList />
      </ComponentCard>
    </div>
  );
}