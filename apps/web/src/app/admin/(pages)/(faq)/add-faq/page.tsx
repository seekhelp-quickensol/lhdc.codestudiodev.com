"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";
import AddFaqForm from "./add-faq";


export default function Faq() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="FAQ Management | Add FAQ"
        desc="Create, edit, and manage FAQs."
      >
        <AddFaqForm />
      </ComponentCard>
    </div>
  );
}
