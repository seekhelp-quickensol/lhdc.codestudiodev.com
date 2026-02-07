"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";
import AddSuccessStoryForm from "./add-success-story";


export default function SuccessStoryPage() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="Success Story Management | Add Success Story"
        desc="Create, edit, and manage success stories."
      >
        <AddSuccessStoryForm />
      </ComponentCard>
    </div>
  );
}
