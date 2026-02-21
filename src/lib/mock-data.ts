// Mock data for HeyAna platform

export const topTraders = [
  { id: 1, name: "AlphaTrader_92", avatar: "AT", winRate: 87.3, pnl: "+$24,580", trades: 342, streak: 12, markets: ["Politics", "Crypto"] },
  { id: 2, name: "PredictorX", avatar: "PX", winRate: 82.1, pnl: "+$18,240", trades: 218, streak: 8, markets: ["Economics", "Weather"] },
  { id: 3, name: "MarketSeer", avatar: "MS", winRate: 79.8, pnl: "+$15,920", trades: 456, streak: 5, markets: ["Sports", "Politics"] },
  { id: 4, name: "OracleBot_v3", avatar: "OB", winRate: 76.5, pnl: "+$12,340", trades: 189, streak: 3, markets: ["Crypto", "Tech"] },
  { id: 5, name: "SharpEdge", avatar: "SE", winRate: 74.2, pnl: "+$9,870", trades: 527, streak: 7, markets: ["Finance", "Politics"] },
];

export const activeTrades = [
  { id: 1, market: "Will BTC exceed $150K by March 2026?", position: "Yes", entry: 0.62, current: 0.71, pnl: "+14.5%", status: "active", trader: "AlphaTrader_92", volume: "$45.2K" },
  { id: 2, market: "Fed rate cut in Q1 2026?", position: "No", entry: 0.45, current: 0.38, pnl: "+15.6%", status: "active", trader: "PredictorX", volume: "$32.1K" },
  { id: 3, market: "US GDP growth > 3% in 2026?", position: "Yes", entry: 0.55, current: 0.58, pnl: "+5.5%", status: "active", trader: "MarketSeer", volume: "$28.7K" },
  { id: 4, market: "S&P 500 above 6500 by June?", position: "Yes", entry: 0.48, current: 0.52, pnl: "+8.3%", status: "active", trader: "AlphaTrader_92", volume: "$51.3K" },
  { id: 5, market: "Will AI regulation pass in 2026?", position: "No", entry: 0.72, current: 0.68, pnl: "+5.6%", status: "pending", trader: "OracleBot_v3", volume: "$19.8K" },
];

export const marketTrends = [
  { name: "Jan", politics: 65, crypto: 45, economics: 55, sports: 40 },
  { name: "Feb", politics: 72, crypto: 52, economics: 48, sports: 38 },
  { name: "Mar", politics: 58, crypto: 68, economics: 62, sports: 45 },
  { name: "Apr", politics: 80, crypto: 78, economics: 55, sports: 52 },
  { name: "May", politics: 75, crypto: 85, economics: 60, sports: 48 },
  { name: "Jun", politics: 82, crypto: 72, economics: 68, sports: 55 },
  { name: "Jul", politics: 90, crypto: 65, economics: 72, sports: 60 },
];

export const performanceData = [
  { name: "Week 1", profit: 1200, loss: -400 },
  { name: "Week 2", profit: 1800, loss: -200 },
  { name: "Week 3", profit: 900, loss: -600 },
  { name: "Week 4", profit: 2400, loss: -100 },
  { name: "Week 5", profit: 1600, loss: -350 },
  { name: "Week 6", profit: 2100, loss: -150 },
  { name: "Week 7", profit: 2800, loss: -80 },
  { name: "Week 8", profit: 3200, loss: -200 },
];

export const portfolioStats = {
  totalBalance: "$42,580",
  totalPnL: "+$8,420",
  pnlPercent: "+24.6%",
  activeTrades: 12,
  winRate: "78.3%",
  copiedTraders: 4,
  avgReturn: "+18.2%",
  riskScore: 6.5,
};

export const marketCategories = [
  { name: "Politics", icon: "🏛️", count: 234, hot: true },
  { name: "Crypto", icon: "₿", count: 189, hot: true },
  { name: "Economics", icon: "📊", count: 156, hot: false },
  { name: "Sports", icon: "⚽", count: 312, hot: false },
  { name: "Weather", icon: "🌤️", count: 87, hot: false },
  { name: "Tech", icon: "💻", count: 143, hot: true },
  { name: "Entertainment", icon: "🎬", count: 98, hot: false },
  { name: "Science", icon: "🔬", count: 67, hot: false },
];

export const recentActivity = [
  { time: "2 min ago", action: "Copied trade", detail: "BTC > $150K by March", trader: "AlphaTrader_92", type: "copy" },
  { time: "15 min ago", action: "Trade closed", detail: "Fed rate decision — Won", trader: "PredictorX", type: "win" },
  { time: "1 hr ago", action: "AI Alert", detail: "New high-confidence signal detected", trader: "System", type: "alert" },
  { time: "2 hrs ago", action: "Risk adjusted", detail: "Max position reduced to 5%", trader: "You", type: "setting" },
  { time: "4 hrs ago", action: "Copied trade", detail: "S&P above 6500 by June", trader: "MarketSeer", type: "copy" },
];
