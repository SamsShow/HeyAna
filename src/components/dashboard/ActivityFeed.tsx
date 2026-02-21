"use client";

import { recentActivity } from "@/lib/mock-data";
import { Copy, Trophy, Bell, Settings, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  copy: Copy,
  win: Trophy,
  alert: Bell,
  setting: Settings,
};

const colorMap: Record<string, string> = {
  copy: "text-blue-400 bg-blue-400/10",
  win: "text-green-500 bg-green-500/10",
  alert: "text-red-primary bg-red-primary/10",
  setting: "text-muted bg-surface",
};

export function ActivityFeed() {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-red-primary" />
          <h3 className="text-lg font-semibold">Activity Feed</h3>
        </div>
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider">Live</span>
      </div>

      <div className="space-y-4">
        {recentActivity.map((item, i) => {
          const Icon = iconMap[item.type] || Bell;
          const color = colorMap[item.type] || "text-muted bg-surface";
          return (
            <div
              key={i}
              className="flex items-start gap-3 group"
            >
              <div className={`p-1.5 rounded-lg ${color} mt-0.5`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.action}</span>
                  <span className="text-[10px] text-muted font-mono">{item.time}</span>
                </div>
                <p className="text-xs text-muted mt-0.5 truncate">{item.detail}</p>
                <span className="text-[10px] text-muted">by {item.trader}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
