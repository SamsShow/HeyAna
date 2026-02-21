"use client";

import { performanceData } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function PerformanceChart() {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Copy Performance</h3>
          <p className="text-xs text-muted mt-1">Weekly profit & loss from copied trades</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-green-500" />
            <span className="text-[10px] text-muted">Profit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-red-primary" />
            <span className="text-[10px] text-muted">Loss</span>
          </div>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--muted)" }} axisLine={{ stroke: "var(--border-color)" }} />
            <YAxis tick={{ fontSize: 11, fill: "var(--muted)" }} axisLine={{ stroke: "var(--border-color)" }} tickFormatter={(val) => `$${val}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
              formatter={(value) => {
                if (value === undefined || value === null) return ["$0", ""];
                const num = Number(value);
                return [`$${Math.abs(num)}`, num >= 0 ? "Profit" : "Loss"];
              }}
            />
            <Bar dataKey="profit" fill="#22C55E" radius={[4, 4, 0, 0]} />
            <Bar dataKey="loss" fill="#DC2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
