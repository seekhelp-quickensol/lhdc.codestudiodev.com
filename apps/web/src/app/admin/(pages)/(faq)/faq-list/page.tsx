


"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";

import FaqList from "./faq-list";



export default function PressRelease() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      
    <ComponentCard
  title=" FAQ List"
  desc="View, edit, publish, and manage all FAQs."
>


            <FaqList          
          />
        </ComponentCard>
     
    </div>
  );
}
