"use client";

import { useSidebar } from "@/src/context/admin/SidebarContext";
import AppHeader from "@/src/layout/admin/AppHeader";
import AppSidebar from "@/src/layout/admin/AppSidebar";
import Backdrop from "@/src/layout/admin/Backdrop";
import React from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";
  
  return (
    <div className="min-h-screen xl:flex dark:bg-gray-900 dark:border-gray-800 bg-white">
      <AppSidebar />
      <Backdrop />
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out `}
      > 
          <AppHeader/>       
        <div className={`dark:bg-gray-900 max-w-full md:p-6 ${mainContentMargin}`}>{children}</div>
      </div>
    </div>
  );
}
