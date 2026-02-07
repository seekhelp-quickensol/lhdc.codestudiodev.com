"use client";

import { useState } from "react";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import AddBlogForm from "./add-blog";
import { useStateContext } from "@/src/context/admin/StateContext";

export default function BlogPage() {
  const { refresh, setRefresh } = useStateContext();

  return (
    <div className="space-y-6">
      
        <ComponentCard
          title="Blog Management | Add Blog"
          desc="Create, edit, publish, and manage blogs."
        >

            <AddBlogForm          
          />
        </ComponentCard>
     
    </div>
  );
}
