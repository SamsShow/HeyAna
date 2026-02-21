"use client";

import { motion } from "framer-motion";
import { topTraders } from "@/lib/mock-data";
import { TrendingUp, Trophy, Flame } from "lucide-react";

export function TopTraders() {
  return (
    <section id="traders" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-red-primary uppercase tracking-widest">Leaderboard</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Top Traders to
            <span className="text-red-primary"> Copy</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            AI-ranked traders based on win rate, consistency, and risk-adjusted returns on Kalshi.
          </p>
        </motion.div>

        {/* Trader Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topTraders.slice(0, 3).map((trader, i) => (
            <motion.div
              key={trader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 rounded-xl border bg-surface/50 hover:bg-surface transition-all duration-300 shine-effect ${
                i === 0 ? "border-red-primary/40 glow-red" : "border-border hover:border-red-primary/20"
              }`}
            >
              {i === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-red-primary text-white text-[10px] font-mono uppercase tracking-wider">
                  <Trophy className="w-3 h-3" /> #1 Ranked
                </div>
              )}

              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm font-mono ${
                  i === 0 ? "bg-red-primary text-white" : "bg-red-primary/10 text-red-primary"
                }`}>
                  {trader.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{trader.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Flame className="w-3 h-3 text-red-primary" />
                    {trader.streak} win streak
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <div className="text-xs text-muted mb-1">Win Rate</div>
                  <div className="text-lg font-bold font-mono text-green-500">{trader.winRate}%</div>
                </div>
                <div>
                  <div className="text-xs text-muted mb-1">PnL</div>
                  <div className="text-lg font-bold font-mono text-green-500">{trader.pnl}</div>
                </div>
                <div>
                  <div className="text-xs text-muted mb-1">Trades</div>
                  <div className="text-lg font-bold font-mono">{trader.trades}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {trader.markets.map((m) => (
                  <span key={m} className="text-[10px] font-mono text-muted border border-border rounded px-2 py-0.5">
                    {m}
                  </span>
                ))}
              </div>

              <button className="w-full py-2.5 rounded-lg border border-red-primary/30 text-red-primary hover:bg-red-primary hover:text-white transition-all text-sm font-medium flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Copy Trader
              </button>
            </motion.div>
          ))}
        </div>

        {/* Remaining traders as smaller cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {topTraders.slice(3).map((trader, i) => (
            <motion.div
              key={trader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface/50 hover:border-red-primary/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-primary/10 text-red-primary flex items-center justify-center font-bold text-xs font-mono">
                  {trader.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{trader.name}</div>
                  <div className="text-xs text-muted">{trader.trades} trades</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-mono font-bold text-green-500">{trader.winRate}%</div>
                  <div className="text-[10px] text-muted">Win Rate</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono font-bold text-green-500">{trader.pnl}</div>
                  <div className="text-[10px] text-muted">PnL</div>
                </div>
                <button className="px-3 py-1.5 rounded-lg border border-red-primary/30 text-red-primary hover:bg-red-primary hover:text-white transition-all text-xs font-medium">
                  Copy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
