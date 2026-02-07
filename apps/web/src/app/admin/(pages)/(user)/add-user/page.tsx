"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";

import { useStateContext } from "@/src/context/admin/StateContext";
import UserContactForm from "./add-user";
// import AddFaqForm from "./add-faq";


export default function User() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="Add User"
        desc="Create, edit, User."
      >
        <UserContactForm />
      </ComponentCard>
    </div>
  );
}
