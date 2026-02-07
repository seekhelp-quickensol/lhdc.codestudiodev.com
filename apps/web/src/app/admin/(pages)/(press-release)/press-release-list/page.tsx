


"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";

import PressReleaseList from "./press-release-list";

export default function PressRelease() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      
    <ComponentCard
  title=" Press Release List"
  desc="View, edit, publish, and manage all press releases."
>


            <PressReleaseList          
          />
        </ComponentCard>
     
    </div>
  );
}
