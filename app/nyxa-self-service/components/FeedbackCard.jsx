/**
 * FeedbackCard Component (Stateless)
 * Displays feedback when verification fails, with manual fallback option
 */

import Image from 'next/image';

export function FeedbackCard({ message, detectedStars, onRetry }) {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            {/* Icon */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10">
                    <svg
                        className="w-10 h-10 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>

                <h2 className="text-3xl font-bold">Almost There!</h2>
            </div>

            {/* Feedback Card */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6 shadow-lg">
                {/* Stars Display */}
                <div className="text-center space-y-3">
                    <p className="text-muted-foreground">We detected:</p>
                    <div className="flex gap-1 justify-center text-3xl">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < detectedStars ? 'text-yellow-500' : 'text-gray-300'}>
                                ⭐
                            </span>
                        ))}
                    </div>
                    <p className="text-lg font-medium">
                        {detectedStars} out of 5 stars
                    </p>
                </div>

                {/* Message */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-900 text-center">{message}</p>
                </div>

                {/* Instructions */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-center">What to do next:</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                1
                            </span>
                            <span>Open the App Store</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                2
                            </span>
                            <span>Find your review for Nyxa and update it to 5 stars</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                3
                            </span>
                            <span>Take a new screenshot showing all 5 stars</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                4
                            </span>
                            <span>Come back and upload the updated screenshot</span>
                        </li>
                    </ol>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
                <button
                    onClick={onRetry}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                    Upload New Screenshot
                </button>
            </div>

            {/* Manual Fallback Option */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-semibold">Having issues with verification?</h4>
                        <p className="text-sm text-muted-foreground">No worries — I'll send you the redeem link personally!</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                        Just write a nice 5-star review like this example:
                    </p>

                    {/* Example Review Screenshot */}
                    <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                        <Image
                            src="/review-example.png"
                            alt="Example 5-star review"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Then take a screenshot and DM me on X:
                    </p>

                    <a
                        href="https://x.com/MohamedSaid__"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-black/80 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Message @MohamedSaid__
                    </a>
                </div>
            </div>
        </div>
    );
}
