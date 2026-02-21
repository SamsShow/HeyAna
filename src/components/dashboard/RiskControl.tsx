"use client";

import { useState } from "react";
import { ShieldCheck, AlertTriangle, Sliders } from "lucide-react";
import { portfolioStats, marketCategories } from "@/lib/mock-data";

export function RiskControl() {
  const [maxExposure, setMaxExposure] = useState(25);
  const [maxPerTrade, setMaxPerTrade] = useState(5);
  const [stopLoss, setStopLoss] = useState(15);
  const [riskScore] = useState(portfolioStats.riskScore);

  const getRiskColor = (score: number) => {
    if (score <= 3) return "text-green-500";
    if (score <= 6) return "text-yellow-500";
    return "text-red-primary";
  };

  const getRiskLabel = (score: number) => {
    if (score <= 3) return "Conservative";
    if (score <= 6) return "Moderate";
    return "Aggressive";
  };

  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50" id="risk">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-red-primary/10">
            <ShieldCheck className="w-5 h-5 text-red-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Risk Control Panel</h3>
            <p className="text-xs text-muted mt-0.5">Manage your exposure and trading constraints</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className={`w-4 h-4 ${getRiskColor(riskScore)}`} />
          <span className={`text-sm font-mono font-bold ${getRiskColor(riskScore)}`}>
            {riskScore}/10
          </span>
          <span className={`text-xs ${getRiskColor(riskScore)}`}>
            {getRiskLabel(riskScore)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted">Max Portfolio Exposure</label>
              <span className="text-sm font-mono font-bold text-red-primary">{maxExposure}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={100}
              value={maxExposure}
              onChange={(e) => setMaxExposure(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-red-primary bg-border"
            />
            <div className="flex justify-between text-[10px] text-muted mt-1 font-mono">
              <span>5%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted">Max Per Trade</label>
              <span className="text-sm font-mono font-bold text-red-primary">{maxPerTrade}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={25}
              value={maxPerTrade}
              onChange={(e) => setMaxPerTrade(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-red-primary bg-border"
            />
            <div className="flex justify-between text-[10px] text-muted mt-1 font-mono">
              <span>1%</span>
              <span>25%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted">Stop Loss Trigger</label>
              <span className="text-sm font-mono font-bold text-red-primary">{stopLoss}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={50}
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-red-primary bg-border"
            />
            <div className="flex justify-between text-[10px] text-muted mt-1 font-mono">
              <span>5%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {/* Market Filters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sliders className="w-4 h-4 text-muted" />
            <span className="text-sm text-muted">Market Filters</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {marketCategories.map((cat) => (
              <label
                key={cat.name}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-border hover:border-red-primary/20 cursor-pointer transition-all group"
              >
                <input
                  type="checkbox"
                  defaultChecked={cat.hot}
                  className="w-3.5 h-3.5 rounded border-border accent-red-primary"
                />
                <span className="text-sm">{cat.icon}</span>
                <span className="text-xs">{cat.name}</span>
                {cat.hot && (
                  <span className="ml-auto text-[8px] font-mono text-red-primary border border-red-primary/20 rounded px-1">
                    HOT
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2.5 rounded-lg bg-red-primary text-white text-sm font-medium hover:bg-red-dark transition-all glow-red">
          Save Risk Settings
        </button>
      </div>
    </div>
  );
}
