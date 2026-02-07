"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";
import UserList from "./user-list";



export default function SuccessStory() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      <ComponentCard
        title="User List"
        desc="View, edit, publish, and manage all Users."
      >
        <UserList/>
      </ComponentCard>
    </div>
  );
}
