"use client";

import { motion } from "framer-motion";
import { Copy, Brain, Shield, Zap, BarChart3, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Copy,
    title: "Auto Trade Copying",
    description: "Automatically mirror trades from top-performing Kalshi traders. Real-time execution with configurable position sizing.",
    tag: "CORE",
  },
  {
    icon: Brain,
    title: "AI Intelligence Layer",
    description: "Powered by Elsa AI x402 for market analysis, trader scoring, and predictive signal generation.",
    tag: "AI",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Set max exposure, stop-loss triggers, and market category filters. Full control over your risk profile.",
    tag: "SAFETY",
  },
  {
    icon: BarChart3,
    title: "Market Analytics",
    description: "Deep market insights powered by Covalent GoldRush API. Track trends, volume, and price movements across prediction markets.",
    tag: "DATA",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Sub-second trade copying via Kalshi API integration. Never miss a profitable entry from your tracked traders.",
    tag: "SPEED",
  },
  {
    icon: MessageCircle,
    title: "Telegram Trading",
    description: "Execute and manage trades directly from Telegram via OpenClaw. Get alerts, monitor positions, and trade on the go.",
    tag: "MOBILE",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-red-primary uppercase tracking-widest">Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Everything You Need to Trade
            <span className="text-red-primary"> Smarter</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A complete toolkit for intelligent prediction market trade copying — 
            from AI-powered trader discovery to automated execution.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-border bg-surface/50 hover:border-red-primary/30 hover:bg-surface transition-all duration-300 shine-effect"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-red-primary/10 text-red-primary group-hover:bg-red-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-muted border border-border rounded px-2 py-0.5 uppercase tracking-wider">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
