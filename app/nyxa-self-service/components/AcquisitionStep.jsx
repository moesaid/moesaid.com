/**
 * AcquisitionStep Component (Stateless)
 * Displays the initial call-to-action for the Nyxa giveaway campaign
 */

export function AcquisitionStep({ onReady }) {
    const rewards = [
        { tier: '🏆 First 100', reward: 'FREE Year', description: '1 full year of Nyxa Premium', urgency: 'high' },
        { tier: '🥈 Next 100', reward: 'FREE Month', description: '1 month of Premium access', urgency: 'medium' },
        { tier: '🎁 Next 500', reward: '50% Off Year', description: 'Half off annual subscription', urgency: 'low' },
        { tier: '✨ Next 600', reward: '50% Off Month', description: 'Half off monthly subscription', urgency: 'low' },
    ];

    return (
        <div className="max-w-3xl mx-auto text-center space-y-10 animate-fade-in">
            {/* Hero Section with Urgency */}
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-semibold animate-pulse">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    LIMITED TIME — 1,300 Codes Available
                </div>

                <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight pb-2">
                    <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        Sleep Better.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                        Pay Nothing.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
                    Leave a 5-star review and unlock <strong className="text-foreground">FREE Premium access</strong> or up to <strong className="text-foreground">50% off</strong> — first come, first served.
                </p>
            </div>

            {/* Reward Tiers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {rewards.map((item, index) => (
                    <div
                        key={index}
                        className={`relative p-4 md:p-6 rounded-2xl border-2 transition-all hover:scale-105 ${item.urgency === 'high'
                            ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/50 shadow-lg shadow-amber-500/20'
                            : item.urgency === 'medium'
                                ? 'bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border-blue-400/40'
                                : 'bg-muted/50 border-border'
                            }`}
                    >
                        {item.urgency === 'high' && (
                            <div className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                HOT
                            </div>
                        )}
                        <div className="text-2xl mb-2">{item.tier.split(' ')[0]}</div>
                        <div className="font-bold text-lg md:text-xl">{item.reward}</div>
                        <div className="text-xs md:text-sm text-muted-foreground mt-1">{item.description}</div>
                    </div>
                ))}
            </div>

            {/* How It Works - Minimal */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    Download Nyxa
                </span>
                <span className="hidden md:block">→</span>
                <span className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    Rate 5 Stars ⭐
                </span>
                <span className="hidden md:block">→</span>
                <span className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    Upload Screenshot
                </span>
                <span className="hidden md:block">→</span>
                <span className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    Get Reward!
                </span>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
                <button
                    onClick={onReady}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
                >
                    <span>I Already Rated — Let's Go!</span>
                    <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>
            </div>

            {/* Download Links */}
            <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Haven't downloaded Nyxa yet?</p>
                <a
                    href="https://apps.apple.com/us/app/nyxa-sleep-tracker-sound/id6756638306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-black/80 transition-colors"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download on App Store
                </a>
            </div>
        </div>
    );
}
