"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Image Result.gif"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Subtle animated shimmer overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          {/* Logo */}
          <Image
            src="/heyanna1 1.png"
            alt="HeyAnna Logo"
            width={96}
            height={96}
            className="rounded-sm"
            style={{ imageRendering: "pixelated" }}
          />
          {/* Brand Name */}
          <h1
            className="text-5xl md:text-6xl font-light tracking-wide"
            style={{ color: "#e8dcc8", fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            heyanna
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light tracking-widest mt-2"
          style={{ color: "#c9bdaa" }}
        >
          Coming Soon
        </motion.p>
      </div>

      {/* Bottom subtle footer area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 z-10 flex items-center gap-3 text-sm tracking-wide"
        style={{ color: "#a09888" }}
      >
        <a href="https://x.com/tryheyanna" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8dcc8] transition-colors duration-300">
          X
        </a>
        <span>•</span>
        <a href="#" className="hover:text-[#e8dcc8] transition-colors duration-300">
          Request Deck
        </a>
      </motion.div>
    </main>
  );
}
