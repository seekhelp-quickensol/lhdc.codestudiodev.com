'use client';

import { useEffect, useState } from "react";
import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";

import AddStatusForm from "./add-status";
import StatusList from "./status-list";

export default function StatusPage() {
  const { refresh, setRefresh, itemID } = useStateContext();
  const [showForm, setShowForm] = useState(true);

  /* =======================
     After Form Submit
  ======================= */
  const handleFormSubmit = () => {
    setRefresh(!refresh);
  };

  /* =======================
     Open Form on Edit
  ======================= */
  useEffect(() => {
    if (itemID) {
      setShowForm(true);
    }
  }, [itemID]);

  return (
    <ComponentCard
      title="Status Master"
      desc="Status Master allows you to define and manage the status values for services or processes, helping maintain clarity and consistency across operations."
    >
      {/* ADD / EDIT FORM */}
      {showForm && (
        <AddStatusForm onFormSubmit={handleFormSubmit} />
      )}

      {/* LIST */}
      <div className="grid grid-cols-1 gap-8 mt-4">
        <StatusList />
      </div>
    </ComponentCard>
  );
}
