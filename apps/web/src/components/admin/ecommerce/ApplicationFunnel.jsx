import { TrendingUp, MoreHorizontal } from "lucide-react";
import {
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const funnelData = [
  { name: "Pending", value: 500 },
  { name: "Draft", value: 350 },
  { name: "Approved", value: 250 },
  { name: "Rejected", value: 100 },
  { name: "Completed", value: 200 },
];

// Refined Professional Palette (Matching your previous gradient requests)
const funnelColors = ["#2563eb", "#7c3aed", "#0d9488", "#ea580c", "#16a34a"];

export default function ApplicationFunnel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Matching the Professional Accent Bar you liked */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-600 to-indigo-500"></div>

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <TrendingUp size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold tracking-tight">Application Funnel</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Conversion tracking across application states
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Chart Section */}
        <div className="mt-8 h-[350px] w-full">
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
                neckWidth={20}
                neckHeight={20} 
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
        <div className="mt-4 grid grid-cols-5 gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
            {funnelData.map((item, i) => (
                <div key={i} className="text-center">
                    <p className="text-[10px] font-bold uppercase text-gray-400">{item.name}</p>
                    <p className="text-sm font-bold text-gray-800 dark:text-white">{item.value}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}