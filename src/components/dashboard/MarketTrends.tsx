"use client";

import { marketTrends } from "@/lib/mock-data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function MarketTrendsChart() {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50" id="markets">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Market Trends</h3>
          <p className="text-xs text-muted mt-1">Volume activity across prediction market categories</p>
        </div>
        <div className="flex items-center gap-2">
          {["7D", "30D", "90D"].map((period, i) => (
            <button
              key={period}
              className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all ${
                i === 1
                  ? "bg-red-primary text-white"
                  : "border border-border text-muted hover:text-foreground hover:border-red-primary/30"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={marketTrends} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="politicsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="cryptoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="econGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--muted)" }} axisLine={{ stroke: "var(--border-color)" }} />
            <YAxis tick={{ fontSize: 11, fill: "var(--muted)" }} axisLine={{ stroke: "var(--border-color)" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px" }}
            />
            <Area type="monotone" dataKey="politics" stroke="#DC2626" fill="url(#politicsGrad)" strokeWidth={2} name="Politics" />
            <Area type="monotone" dataKey="crypto" stroke="#F59E0B" fill="url(#cryptoGrad)" strokeWidth={2} name="Crypto" />
            <Area type="monotone" dataKey="economics" stroke="#3B82F6" fill="url(#econGrad)" strokeWidth={2} name="Economics" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
