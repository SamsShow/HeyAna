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
          className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center"
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
          className="flex items-center"
        >
          {/* Logo */}
          <Image
            src="/logoo.png"
            alt="HeyAnna Logo"
            width={120}
            height={120}
            className="rounded-sm"
            style={{ imageRendering: "pixelated" }}
          />
          {/* Brand Name */}
          <h1
            className="text-5xl md:text-7xl font-normal tracking-wide"
            style={{ color: "#e8dcc8", fontFamily: "'Hiragino Kaku Gothic Pro', 'Hiragino Sans', sans-serif" }}
          >
            HeyAnna
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-normal tracking-wide text-center w-full"
          style={{ color: "#c9bdaa", fontFamily: "'Hiragino Kaku Gothic Pro', 'Hiragino Sans', sans-serif", transform: "translateX(20px)" }}
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
        <a
          href="https://x.com/tryheyanna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-[#e8dcc8] transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
            <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.8-7.584-6.633 7.584H.48l8.6-9.83L0 1.154h7.594l5.242 6.932zM17.61 20.645h2.039L6.486 3.24H4.298z" />
          </svg>
        </a>
        <span>•</span>
        <a href="#" className="hover:text-[#e8dcc8] transition-colors duration-300">
          Request Deck
        </a>
      </motion.div>
    </main>
  );
}
