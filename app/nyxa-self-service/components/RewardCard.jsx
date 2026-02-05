/**
 * RewardCard Component (Stateless)
 * Displays success state with tiered reward redemption links
 */

// Reward tiers with their codes and App Store redemption URL format
const REWARD_TIERS = [
    {
        id: 'free-year',
        code: 'REDDIT26',
        title: '🏆 FREE Full Year',
        description: '1 year of Nyxa Premium',
        value: '$59.99 value',
        gradient: 'from-amber-500 to-orange-600',
        available: 100,
    },
    {
        id: 'free-month',
        code: 'FREEMONTH',
        title: '🥈 FREE Month',
        description: '1 month of Premium access',
        value: '$4.99 value',
        gradient: 'from-blue-500 to-cyan-600',
        available: 100,
    },
    {
        id: 'half-year',
        code: 'GLOBAL50',
        title: '🎁 50% Off Year',
        description: 'Half off annual subscription',
        value: 'Save $29.99',
        gradient: 'from-emerald-500 to-teal-600',
        available: 500,
    },
    {
        id: 'half-month',
        code: 'MONTH50',
        title: '✨ 50% Off Month',
        description: 'Half off monthly subscription',
        value: 'Save $2.49',
        gradient: 'from-purple-500 to-pink-600',
        available: 600,
    },
];

const APP_ID = '6756638306';
const getRedeemUrl = (code) => `https://apps.apple.com/redeem?ctx=offercodes&id=${APP_ID}&code=${code}`;

export function RewardCard() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            {/* Success Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10">
                    <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <h2 className="text-4xl font-bold">You're Verified! 🎉</h2>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                    Choose your reward below. <strong>First come, first served</strong> — codes are limited!
                </p>
            </div>

            {/* Reward Tiers - Just redemption links */}
            <div className="grid md:grid-cols-2 gap-4">
                {REWARD_TIERS.map((tier) => (
                    <a
                        key={tier.id}
                        href={getRedeemUrl(tier.code)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative rounded-2xl p-6 border-2 border-border transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg group`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold">{tier.title}</h3>
                                <p className="text-sm text-muted-foreground">{tier.description}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${tier.gradient}`}>
                                {tier.value}
                            </span>
                        </div>

                        {/* Redeem Button */}
                        <div className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${tier.gradient} group-hover:opacity-90 transition-opacity`}>
                            Redeem Now
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>

                        {/* Availability */}
                        <p className="text-xs text-muted-foreground text-center mt-3">
                            {tier.available} available • First come, first served
                        </p>
                    </a>
                ))}
            </div>

            {/* Thank You */}
            <div className="text-center text-sm text-muted-foreground">
                <p>Thank you for being an amazing Nyxa user! 💙</p>
            </div>
        </div>
    );
}
