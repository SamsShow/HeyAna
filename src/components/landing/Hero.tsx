"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Bot, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-fade" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center pt-4 sm:pt-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-primary/20 bg-red-primary/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-primary animate-pulse-red" />
            <span className="text-xs font-mono text-red-primary uppercase tracking-widest">
              Powered by Kalshi &bull; Elsa AI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            The Smartest Way to
            <br />
            <span className="text-red-primary">Copy Trades</span> on
            <br />
            Prediction Markets
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            HeyAna identifies top-performing traders on Kalshi and automatically
            copies their moves. AI-powered insights, configurable risk, and
            cross-platform execution via web & Telegram.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/onboarding"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-red-primary text-white font-medium hover:bg-red-dark transition-all glow-red-strong"
            >
              Start Copying Trades
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border hover:border-red-primary/30 text-foreground font-medium transition-all"
            >
              View Dashboard
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "$2.4M+", label: "Volume Copied" },
              { value: "78.3%", label: "Avg Win Rate" },
              { value: "1,200+", label: "Active Copiers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-red-primary">{stat.value}</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <div className="w-3 h-3 rounded-full bg-red-primary/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted font-mono">heyana — trade-copier</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-red-primary" />
                  <span className="text-muted">Scanning Kalshi markets...</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-red-primary" />
                  <span className="text-muted">AI analyzing trader: <span className="text-foreground">AlphaTrader_92</span> — Win rate: <span className="text-green-500">87.3%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-red-primary" />
                  <span className="text-muted">Signal detected: <span className="text-foreground">&quot;BTC &gt; $150K by March&quot;</span> — Confidence: <span className="text-red-primary">HIGH</span></span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <span className="text-red-primary">▸</span>
                  <span>Trade copied successfully. Position: Yes @ $0.62</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-primary animate-pulse-red">█</span>
                  <span className="text-muted">Monitoring 12 active positions...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
