"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/heyanalogo.svg"
              alt="HeyAna logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg glow-red"
              priority
            />
            <span className="text-lg font-bold tracking-tight">
              Hey<span className="text-red-primary">Ana</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm text-muted hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/#traders" className="text-sm text-muted hover:text-foreground transition-colors">
              Top Traders
            </Link>
            <a href="https://kalshi.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">
              Kalshi
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="text-sm px-4 py-2 rounded-lg border border-border hover:border-red-primary/50 hover:text-red-primary transition-all"
            >
              Dashboard
            </Link>
            <Link
              href="/onboarding"
              className="text-sm px-4 py-2 rounded-lg bg-red-primary text-white hover:bg-red-dark transition-all glow-red"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="/#features" className="block text-sm text-muted hover:text-foreground px-2 py-1" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="/#how-it-works" className="block text-sm text-muted hover:text-foreground px-2 py-1" onClick={() => setMobileOpen(false)}>How It Works</Link>
            <Link href="/#traders" className="block text-sm text-muted hover:text-foreground px-2 py-1" onClick={() => setMobileOpen(false)}>Top Traders</Link>
            <div className="flex gap-2 pt-2">
              <Link href="/dashboard" className="flex-1 text-center text-sm px-4 py-2 rounded-lg border border-border" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              <Link href="/onboarding" className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-red-primary text-white" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
