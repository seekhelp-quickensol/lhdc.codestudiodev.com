"use client";

import ComponentCard from "@/src/components/admin/common/ComponentCard";
import BlogList from "./blog-list";

export default function BlogPage() {
  

  return (
    <div className="space-y-6">
    
        <ComponentCard
          title="Blog List"
          desc="View all blogs, manage their status, and perform actions like edit, preview, or delete."
        >
        <div className="mt-4">
            <BlogList />
          </div>
         
        </ComponentCard>
   

    </div>
  );
}
