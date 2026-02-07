"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import AddTeamMemberForm from "./add-team-member";

export default function OurTeam() {
  return (
    <div className="space-y-6">
      <ComponentCard
        title="Our Team Management | Add Team Member"
        desc="Create, edit, and manage team members displayed on the website."
      >
        <AddTeamMemberForm />
      </ComponentCard>
    </div>
  );
}
