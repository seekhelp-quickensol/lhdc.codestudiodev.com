"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";

import TeamMemberList from "./team-member-list";

export default function TeamMember() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="Our Team | Team Member List"
        desc="View, edit, and manage all team members."
      >
        <TeamMemberList />
      </ComponentCard>
    </div>
  );
}
