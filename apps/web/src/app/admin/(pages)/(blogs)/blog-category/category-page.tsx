'use client';

import { useEffect, useState } from "react";
import { Button } from "@/shadcn/ui/button";
import ComponentCard from "@/src/components/admin/common/ComponentCard";
import { Plus } from "lucide-react";
import AddCategoryForm from "./add-category";
import BlogCategoryList from "./category-list";
import { useStateContext } from "@/src/context/admin/StateContext";

export default function CategoryPage() {
  const { refresh, setRefresh, itemID, setItemID } = useStateContext();
  const [showForm, setShowForm] = useState(true);

 

  const handleFormSubmit = () => {
  
    setRefresh(!refresh);
  };

  // ✅ FIXED
  useEffect(() => {
    if (itemID) {
      setShowForm(true);
    }
  }, [itemID]);

  return (
    <ComponentCard
      title="Blog Category"
      desc="Blog Category allows administrators to create, manage, and organize blog categories."
    >
    

      {showForm && <AddCategoryForm onFormSubmit={handleFormSubmit} />}

      <div className="grid grid-cols-1 gap-8 mt-4">
        <BlogCategoryList />
      </div>
    </ComponentCard>
  );
}
