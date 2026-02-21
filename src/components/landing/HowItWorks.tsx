"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "AI Discovers Top Traders",
    description: "Our AI continuously scans Kalshi markets to identify traders with consistently high win rates and profitable strategies.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Select & Configure",
    description: "Choose which traders to follow. Set your risk tolerance, position sizes, and market preferences through the onboarding flow.",
  },
  {
    icon: Settings2,
    step: "03",
    title: "Auto-Copy Trades",
    description: "When your chosen traders make a move, HeyAna instantly copies the trade to your Kalshi account with your configured parameters.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Monitor & Profit",
    description: "Track performance in real-time via dashboard or Telegram. AI alerts keep you informed of high-confidence signals.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 radial-fade opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-red-primary uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            From Signal to Trade in
            <span className="text-red-primary"> Seconds</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Four simple steps to automated prediction market trading.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-red-primary/30 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-primary/10 border border-red-primary/20 mb-5">
                  <step.icon className="w-7 h-7 text-red-primary" />
                </div>
                <div className="text-xs font-mono text-red-primary mb-2 tracking-widest">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
