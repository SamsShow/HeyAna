import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/heyanalogo.svg"
                alt="HeyAna logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-bold tracking-tight">
                Hey<span className="text-red-primary">Ana</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              AI-powered trade copying for prediction markets. Smarter trading, automated.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-sm text-muted hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link href="/onboarding" className="text-sm text-muted hover:text-foreground transition-colors">Get Started</Link></li>
              <li><a href="https://kalshi.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">Kalshi Markets</a></li>
              <li><span className="text-sm text-muted/50">Telegram Bot <span className="text-[10px] border border-border rounded px-1 py-0.5 ml-1">SOON</span></span></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted">Technology</h4>
            <ul className="space-y-2">
              <li><a href="https://x402.heyelsa.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">Elsa AI x402</a></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">Covalent GoldRush</span></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">OpenClaw</span></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">AI Intelligence Layer</span></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted">Community</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">Documentation</span></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">Discord</span></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">Twitter / X</span></li>
              <li><span className="text-sm text-muted hover:text-foreground transition-colors cursor-default">GitHub</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 HeyAna. All rights reserved. Built with intelligence.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-red-primary animate-pulse-red"></span>
            Powered by Kalshi &bull; Elsa AI &bull; Covalent
          </div>
        </div>
      </div>
    </footer>
  );
}
