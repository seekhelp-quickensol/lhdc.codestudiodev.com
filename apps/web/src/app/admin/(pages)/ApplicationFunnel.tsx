import { CardHeader, CardTitle } from "@/shadcn/ui/card";
import { TrendingUp, MoreHorizontal, Filter } from "lucide-react";
import {
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const funnelData = [
  { name: "Pending", value: 170 },
  { name: "Draft", value: 350 },
  { name: "Approved", value: 250 },
  { name: "Rejected", value: 100 },
  { name: "Completed", value: 200 },
];

// Refined Professional Palette (Matching your previous gradient requests)
const funnelColors = ["#2563eb", "#7c3aed", "#0d9488", "#ea580c", "#16a34a"];

export default function ApplicationFunnel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03] ">
      {/* Matching the Professional Accent Bar you liked */}
     

      <div className="p-6 pl-0">
        {/* Header Section */}
        <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2" />
                Total Application Status
              </CardTitle>
            </CardHeader>
            <p className="mb-4 pl-6">Total Application Status </p>

        {/* Chart Section */}
        <div className="mt-8 px-8 h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              />
              <Funnel
                dataKey="value"
                data={funnelData}
                isAnimationActive
                // Added neckWidth and neckHeight for a smoother "SaaS" funnel shape
                 
              >
                {funnelData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={funnelColors[index]} 
                    fillOpacity={0.85}
                    className="hover:fill-opacity-100 transition-all duration-300"
                  />
                ))}
                <LabelList 
                  position="right" 
                  fill="currentColor" 
                  className="fill-gray-500 dark:fill-gray-400 text-xs font-bold uppercase tracking-widest" 
                  dataKey="name" 
                />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend/Footer (Added for extra "Professional" feel) */}
       <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-gray-50 pt-4 dark:border-gray-800/50">
  {funnelData.map((item, i) => (
    <div key={i} className="flex items-center gap-2">
      {/* Small color dot to match chart */}
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: funnelColors[i] }} />
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {item.name}:
      </span>
      <span className="text-xs font-bold text-gray-900 dark:text-white">
        {item.value}
      </span>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}