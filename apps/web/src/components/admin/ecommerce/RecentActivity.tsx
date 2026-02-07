"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/src/components/admin/ui/table";
import Badge from "@/src/components/admin/ui/badge/Badge";
import { 
  UserPlus, 
  CreditCard, 
  Package, 
  Edit3, 
  Trash2, 
  PlusCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

// Activity Type Interface
interface Activity {
  id: number;
  type: "registration" | "payment" | "subscription" | "add" | "edit" | "delete";
  actor: string;
  target?: string;
  details: string;
  timestamp: string;
  status?: "success" | "pending" | "failed";
}

// Sample Real-Time Activity Data
const recentActivities: Activity[] = [
  {
    id: 1,
    type: "registration",
    actor: "Rahul Mehta",
    details: "New broker registered from Mumbai",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "payment",
    actor: "Priya Sharma",
    target: "Premium Plan",
    details: "₹4,999 payment successful",
    timestamp: "15 minutes ago",
    status: "success",
  },
  {
    id: 3,
    type: "subscription",
    actor: "Amit Patel",
    target: "Gold Plan",
    details: "Upgraded to Gold subscription",
    timestamp: "1 hour ago",
    status: "success",
  },
  {
    id: 4,
    type: "add",
    actor: "Admin",
    target: "Sky Heights Residency",
    details: "Added new project in Pune",
    timestamp: "2 hours ago",
  },
  {
    id: 5,
    type: "edit",
    actor: "Admin",
    target: "Palm Grove Towers",
    details: "Updated price & brochure",
    timestamp: "4 hours ago",
  },
  {
    id: 6,
    type: "delete",
    actor: "Super Admin",
    target: "Old Listing #8921",
    details: "Removed expired property",
    timestamp: "6 hours ago",
  },
  {
    id: 7,
    type: "registration",
    actor: "Neha Verma",
    details: "New broker from Thane",
    timestamp: "8 hours ago",
  },
  {
    id: 8,
    type: "payment",
    actor: "Sanjay Gupta",
    target: "Featured Ads",
    details: "₹15,000 for 30-day campaign",
    timestamp: "Yesterday",
    status: "pending",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "registration":
      return <UserPlus className="w-4 h-4 text-emerald-600" />;
    case "payment":
    case "subscription":
      return <CreditCard className="w-4 h-4 text-blue-600" />;
    case "add":
      return <PlusCircle className="w-4 h-4 text-green-600" />;
    case "edit":
      return <Edit3 className="w-4 h-4 text-amber-600" />;
    case "delete":
      return <Trash2 className="w-4 h-4 text-red-600" />;
    default:
      return <Package className="w-4 h-4 text-gray-600" />;
  }
};

const getActivityBadge = (type: Activity["type"], status?: Activity["status"]) => {
  const baseClasses = "text-xs font-medium";

  if (status === "success")
    return <Badge size="sm" color="success">Success</Badge>;
  if (status === "pending")
    return <Badge size="sm" color="warning">Pending</Badge>;

  switch (type) {
    case "registration":
      return <Badge size="sm" color="primary">New Broker</Badge>;
    case "subscription":
      return <Badge size="sm" color="info">Subscription</Badge>;
    case "add":
      return <Badge size="sm" color="success">Added</Badge>;
    case "edit":
      return <Badge size="sm" color="info">Updated</Badge>;
    case "delete":
      return <Badge size="sm" color="error">Deleted</Badge>;
    default:
      return <Badge size="sm" color="warning">Info</Badge>;
  }
};

export default function RecentActivity() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
           
            <Clock className="w-5 h-5" />
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Recent Activity
            </h3>
            
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          View All
        </button>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Activity
              </TableCell>
              <TableCell className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Details
              </TableCell>
              <TableCell className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
              <TableCell className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Time
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {recentActivities.map((activity) => (
              <TableRow key={activity.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition">
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white/90 text-theme-sm">
                        {activity.actor}
                      </p>
                      {activity.target && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.target}
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-gray-600 dark:text-gray-300 text-theme-sm">
                  {activity.details}
                </TableCell>

                <TableCell className="py-4">
                  {getActivityBadge(activity.type, activity.status)}
                </TableCell>

                <TableCell className="py-4 text-theme-xs text-gray-500 dark:text-gray-400">
                  {activity.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}