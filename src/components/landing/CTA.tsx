"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 radial-fade" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-primary/20 bg-red-primary/5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-red-primary" />
            <span className="text-xs font-mono text-red-primary uppercase tracking-widest">
              Start Trading Smarter
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Let AI Find the Best Trades.
            <br />
            <span className="text-red-primary">You Just Copy.</span>
          </h2>

          <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of traders using HeyAna to automate prediction market
            trading. Set up in minutes, profit for months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="group flex items-center gap-2 px-8 py-4 rounded-lg bg-red-primary text-white font-medium text-lg hover:bg-red-dark transition-all glow-red-strong"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-8 py-4 rounded-lg border border-border hover:border-red-primary/30 font-medium transition-all"
            >
              Explore Dashboard
            </Link>
          </div>

          <p className="text-xs text-muted mt-6">
            No credit card required &bull; Connect your Kalshi account &bull; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
