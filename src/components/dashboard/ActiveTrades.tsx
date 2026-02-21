"use client";

import { activeTrades } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";

export function ActiveTrades() {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50" id="trades">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Active Trades</h3>
          <p className="text-xs text-muted mt-1">Currently open positions copied from traders</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted font-mono">{activeTrades.filter(t => t.status === "active").length} Live</span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Market</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Position</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Entry</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Current</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">PnL</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Trader</th>
              <th className="text-left py-3 text-[10px] font-mono text-muted uppercase tracking-wider">Volume</th>
              <th className="text-right py-3 text-[10px] font-mono text-muted uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {activeTrades.map((trade) => {
              const isProfit = trade.pnl.startsWith("+");
              return (
                <tr key={trade.id} className="border-b border-border/50 hover:bg-surface-hover/50 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="max-w-[200px] truncate font-medium text-sm">{trade.market}</div>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                      trade.position === "Yes" ? "bg-green-500/10 text-green-500" : "bg-red-primary/10 text-red-primary"
                    }`}>
                      {trade.position}
                    </span>
                  </td>
                  <td className="py-3 font-mono text-muted">${trade.entry.toFixed(2)}</td>
                  <td className="py-3 font-mono">${trade.current.toFixed(2)}</td>
                  <td className="py-3">
                    <div className={`flex items-center gap-1 font-mono font-bold ${isProfit ? "text-green-500" : "text-red-primary"}`}>
                      {isProfit ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {trade.pnl}
                    </div>
                  </td>
                  <td className="py-3 text-muted text-xs">{trade.trader}</td>
                  <td className="py-3 font-mono text-xs text-muted">{trade.volume}</td>
                  <td className="py-3 text-right">
                    <button className="p-1.5 rounded-lg hover:bg-surface transition-all">
                      <ExternalLink className="w-3.5 h-3.5 text-muted hover:text-red-primary" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {activeTrades.map((trade) => {
          const isProfit = trade.pnl.startsWith("+");
          return (
            <div key={trade.id} className="p-4 rounded-lg border border-border">
              <div className="font-medium text-sm mb-2 truncate">{trade.market}</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted">Position: </span>
                  <span className={trade.position === "Yes" ? "text-green-500" : "text-red-primary"}>
                    {trade.position}
                  </span>
                </div>
                <div>
                  <span className="text-muted">PnL: </span>
                  <span className={`font-mono font-bold ${isProfit ? "text-green-500" : "text-red-primary"}`}>
                    {trade.pnl}
                  </span>
                </div>
                <div><span className="text-muted">Entry: </span><span className="font-mono">${trade.entry.toFixed(2)}</span></div>
                <div><span className="text-muted">Current: </span><span className="font-mono">${trade.current.toFixed(2)}</span></div>
              </div>
              <div className="text-[10px] text-muted mt-2">Via {trade.trader}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
