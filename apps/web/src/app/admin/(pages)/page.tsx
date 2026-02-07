"use client";
import { EcommerceMetrics } from "@/src/components/admin/ecommerce/EcommerceMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card";
import RecentOrders from "@/src/components/admin/ecommerce/RecentOrders";
import Button from "@/src/components/admin/ui/button/Button";
import {
  BarChart2,
  BarChart3,
  Bell,
  ChartBar,
  ChartBarIncreasing,
  ChartCandlestickIcon,
  DollarSign,
  GitGraph,
  LineChartIcon,
  MapPin,
  Plus,
  TrendingUp,
  Upload,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  FunnelChart,
  Funnel,
  LabelList,

} from "recharts";


import RecentActivity from "@/src/components/admin/ecommerce/RecentActivity";
import DemographicCard from "@/src/components/admin/ecommerce/DemographicCard";
import MonthlySalesChart from "@/src/components/admin/ecommerce/MonthlySalesChart";
import MonthlyTarget from "@/src/components/admin/ecommerce/MonthlyTarget";
import StatisticsChart from "@/src/components/admin/ecommerce/StatisticsChart";
import ApplicationFunnel from "./ApplicationFunnel";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];
const mockRevenueTrend = [
  { month: "Dec", applicationSubmitted: 600 },
  { month: "Jan", applicationSubmitted: 1300 },
  { month: "Feb", applicationSubmitted: 2200 },
  { month: "Mar", applicationSubmitted: 1800 },
  { month: "Apr", applicationSubmitted: 300 },
  { month: "May", applicationSubmitted: 863 },
  { month: "Jun", applicationSubmitted: 780 },
];
const mockRenewalTrends = [
  { month: "Dec", hi: 250, fthb: 200, tmr: 150 }, // sum = 600
  { month: "Jan", hi: 500, fthb: 400, tmr: 400 }, // sum = 1300
  { month: "Feb", hi: 1000, fthb: 700, tmr: 500 }, // sum = 2200
  { month: "Mar", hi: 800, fthb: 600, tmr: 400 }, // sum = 1800
  { month: "Apr", hi: 100, fthb: 100, tmr: 100 }, // sum = 300
  { month: "May", hi: 300, fthb: 300, tmr: 263 }, // sum = 863
  { month: "Jun", hi: 300, fthb: 200, tmr: 280 }, // sum = 780
];

const funnelData = [
  { name: "Pending", value: 500 },
  { name: "Draft", value: 350 },
  { name: "Approved", value: 250 },
  { name: "Rejected", value: 100 },
  { name: "Completed", value: 200 },
];

const funnelColors = ["#2563eb", "#7c3aed", "#06b6d4", "#f97316", "#22c55e"];

const mockBrokerEngagement = [
  { location: "New York", active: 40 },
  { location: "Los Angeles", active: 30 },
  { location: "Chicago", active: 25 },
  { location: "Miami", active: 20 },
  { location: "San Francisco", active: 15 },
  { location: "Other", active: 20 },
];
const mockLocationPopularity = [
  { location: "New York", count: 50 },
  { location: "Los Angeles", count: 40 },
  { location: "Chicago", count: 35 },
  { location: "Miami", count: 30 },
  { location: "San Francisco", count: 25 },
  { location: "Houston", count: 20 },
  { location: "Seattle", count: 15 },
  { location: "Boston", count: 10 },
  { location: "Denver", count: 8 },
  { location: "Austin", count: 7 },
];
// export const metadata: Metadata = {
//     title:
//         "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//     description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Ecommerce() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back!
            {/* Heres whats happening with your store today. */}
          </p>
        </div>

        {/* <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                    </Button>
                    <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Product
                    </Button>
                    <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Import Data
                    </Button>
                </div> */}
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />
          {/* <EcommerceMetrics /> */}
          {/* <DemographicCard/> */}
          {/* <MonthlySalesChart/> */}
          {/* <MonthlyTarget/> */}
          {/* <RecentOrders/> */}
        </div>
        <div className="col-span-12 xl:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2" /> Program-wise Application Counts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Program-wise Application Counts</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockRenewalTrends}>
                  <defs>
                    <linearGradient id="hiGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
                      <stop offset="100%" stopColor="#06b6d4" />{" "}
                      {/* cyan-500 */}
                    </linearGradient>
                    <linearGradient
                      id="fthbGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#7c3aed" />{" "}
                      {/* purple-600 */}
                      <stop offset="100%" stopColor="#ec4899" />{" "}
                      {/* pink-500 */}
                    </linearGradient>
                    <linearGradient
                      id="tmrGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f97316" />{" "}
                      {/* orange-500 */}
                      <stop offset="100%" stopColor="#facc15" />{" "}
                      {/* yellow-400 */}
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar dataKey="hi" name="HI" fill="url(#hiGradient)" />
                  <Bar dataKey="fthb" name="FTHB" fill="url(#fthbGradient)" />
                  <Bar dataKey="tmr" name="TMR" fill="url(#tmrGradient)" />
                  {/* orange-600 */}
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

           <ApplicationFunnel/>

          {/* <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart2 className="mr-2" /> Broker Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Active brokers by location</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockBrokerEngagement}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="active" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card> */}
        </div>

        <div className="col-span-12 xl:col-span-5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChartIcon className="mr-2" />
                Application Submitted Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Application Submitted per Month</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockRevenueTrend}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {/* <Line type="monotone" dataKey="basic" stroke="#8884d8" /> */}
                  <Line
                    type="monotone"
                    stroke="#0d9488"
                    dataKey="applicationSubmitted"
                    strokeWidth={3}
                  />
                  {/* <Line type="monotone" dataKey="enterprise" stroke="" /> */}
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

      
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2" /> Location Popularity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Top 10 locations by broker count (Pie chart as heatmap
                alternative)
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockLocationPopularity}
                    dataKey="count"
                    nameKey="location"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {mockLocationPopularity.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
         
        </div>
        <div className="col-span-12 xl:col-span-12 space-y-6">
          {/* <RecentOrders /> */}
        </div>
        <div className="col-span-12 xl:col-span-12 space-y-6">
          {/* <RecentActivity /> */}
        </div>
      </div>
    </>
  );
}
