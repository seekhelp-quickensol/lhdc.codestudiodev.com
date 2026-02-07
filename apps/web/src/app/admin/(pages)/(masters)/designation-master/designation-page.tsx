'use client';

import { useEffect, useState } from "react";
import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { useStateContext } from "@/src/context/admin/StateContext";

import AddDesignationForm from "./add-designation";
import DesignationList from "./designation-list";

export default function DesignationsPage() {
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
      title="Designation Master"
      desc="Designation Master provides a centralized space to create, manage, and update employee role titles, ensuring consistency and clarity across the organization."
    >
      {/* ADD / EDIT FORM */}
      {showForm && (
        <AddDesignationForm onFormSubmit={handleFormSubmit} />
      )}

      {/* LIST */}
      <div className="grid grid-cols-1 gap-8 mt-4">
        <DesignationList />
      </div>
    </ComponentCard>
  );
}
