"use client";
import React from "react";
import Badge from "@/src/components/admin/ui/badge/Badge";
import {
  Activity,
  BadgeDollarSign,
  Ban,
  Calendar,
  CircleCheck,
  CircleDollarSign,
  ClipboardCheck,
  DollarSignIcon,
  FileText,
  Hourglass,
  ImportIcon,
  Loader,
  RefreshCw,
  ShieldX,
  Users,
  UsersIcon,
} from "lucide-react";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaFunnelDollar } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/src/icons/admin";

export const EcommerceMetrics = () => {
  const router=useRouter();
  return (
    <>
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">

      

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
      
        {/* Accent Line */}
        
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <RefreshCw size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Home Improvment Applications Inprogress
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                300
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Hourglass size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Home Improvment Applications Pending
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                200
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-600 to-green-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <CircleCheck size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Home Improvment Applications Completed
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Ban size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Home Improvment Applications Rejected
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>

     
    </div>

     <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">

     

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
      
        {/* Accent Line */}
        
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <RefreshCw size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              First Time Home Buyer Applications Inprogress
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                300
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Hourglass size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              First Time Home Buyer Applications Pending
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                200
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-600 to-green-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <CircleCheck size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              First Time Home Buyer Applications Completed
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Ban size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              First Time Home Buyer Applications Rejected
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>

     
    </div>


     <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">

      

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
      
        {/* Accent Line */}
        
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <RefreshCw size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tenant Maintenance Request Applications Inprogress
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                300
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Hourglass size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tenant Maintenance Request Applications Pending
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                200
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-600 to-green-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <CircleCheck size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tenant Maintenance Request Applications Completed
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]" >
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-400"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <Ban size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tenant Maintenance Request Applications Rejected
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                280
              </h4>
            </div>
          </div>
        </div>
      </div>
     
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">

       <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]">
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-teal-700"></div>

        <div className="relative flex items-center gap-5">
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl  bg-teal-700 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <DollarSignIcon size={24} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Total Market Raise Amount
            </p>

            <div className="flex items-end gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                13,42,400
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]">
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1  bg-teal-700"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-center">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl  bg-teal-700 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <DollarSignIcon size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              FTHB Market Raise Amount
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                350,000
              </h4>
            </div>
          </div>
        </div>
      </div>

     

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]">
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1  bg-teal-700"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-start">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl  bg-teal-700 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <DollarSignIcon size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              hi Market Raise Amount
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                4,42,400
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800/60 dark:bg-white/[0.04]">
        {/* Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1  bg-teal-700"></div>

        {/* Main flex container */}
        <div className="relative flex gap-5 items-start">
          {/* Icon */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl  bg-teal-700 text-white shadow-lg ring-1 ring-black/5 dark:ring-white/10">
            <DollarSignIcon size={28} strokeWidth={2.5} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Tmr Market Raise Amount
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                550,000
              </h4>
            </div>
          </div>
        </div>
      </div>
</div>


    

    

    </>
  );
};
