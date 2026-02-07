"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";
import AddPressReleaseForm from "./add-press-release";

export default function PressRelease() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      
        <ComponentCard
  title="Press Release Management | Add Press Release"
  desc="Create, edit, publish, and manage press releases."
>

            <AddPressReleaseForm          
          />
        </ComponentCard>
     
    </div>
  );
}
