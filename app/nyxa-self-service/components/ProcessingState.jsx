/**
 * ProcessingState Component (Stateless)
 * Loading state with spinner animation
 */

export function ProcessingState({ message = 'Processing your screenshot...' }) {
    return (
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
                {/* Animated Spinner */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{message}</h2>
                    <p className="text-muted-foreground">
                        This will only take a moment...
                    </p>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}
