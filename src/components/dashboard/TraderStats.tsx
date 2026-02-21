"use client";

import { topTraders } from "@/lib/mock-data";
import { Flame, TrendingUp, MoreVertical } from "lucide-react";

export function TraderStats() {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50" id="traders">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Copied Traders</h3>
          <p className="text-xs text-muted mt-1">Performance of traders you&apos;re following</p>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-red-primary/30 transition-all font-mono">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {topTraders.map((trader, i) => (
          <div
            key={trader.id}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-red-primary/20 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                  i === 0 ? "bg-red-primary text-white" : "bg-red-primary/10 text-red-primary"
                }`}>
                  {trader.avatar}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface ${
                  i < 3 ? "bg-green-500" : "bg-muted"
                }`} />
              </div>
              <div>
                <div className="text-sm font-medium">{trader.name}</div>
                <div className="flex items-center gap-2 text-[10px] text-muted">
                  <span className="flex items-center gap-0.5">
                    <Flame className="w-2.5 h-2.5 text-red-primary" /> {trader.streak} streak
                  </span>
                  <span>&bull;</span>
                  <span>{trader.trades} trades</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-mono font-bold text-green-500">{trader.winRate}%</div>
                <div className="text-[10px] text-muted">Win Rate</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-mono font-bold text-green-500">{trader.pnl}</div>
                <div className="text-[10px] text-muted">PnL</div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`px-2 py-1 rounded text-[10px] font-mono ${
                  i < 3 ? "bg-green-500/10 text-green-500" : "bg-muted/10 text-muted"
                }`}>
                  {i < 3 ? "ACTIVE" : "PAUSED"}
                </div>
                <button className="p-1 rounded hover:bg-surface-hover transition-all opacity-0 group-hover:opacity-100">
                  <MoreVertical className="w-3.5 h-3.5 text-muted" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
