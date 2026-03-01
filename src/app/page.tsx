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
          className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-center"
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
        <a
          href="https://t.me/+i9D5bDox8lNmNDk9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Telegram"
          className="hover:text-[#e8dcc8] transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a>
      </motion.div>
    </main>
  );
}
