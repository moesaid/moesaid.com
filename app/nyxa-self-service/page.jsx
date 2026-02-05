'use client';

/**
 * Review & Reward Flow - Main Container
 * This is the orchestrator that connects the Data Layer to the UI Layer
 */

import { useReviewFlow } from './hooks/useReviewFlow';
import { AcquisitionStep } from './components/AcquisitionStep';
import { VerificationStep } from './components/VerificationStep';
import { ProcessingState } from './components/ProcessingState';
import { FeedbackCard } from './components/FeedbackCard';
import { RewardCard } from './components/RewardCard';

export default function NyxaSelfServicePage() {
    // Data Layer - Single source of truth
    const {
        currentState,
        errorMessage,
        analysisResult,
        startVerification,
        uploadFile,
        retryUpload,
        reset,
        STATES,
    } = useReviewFlow();

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-16 px-6">
            <div className="container max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <img
                            src="/nyxa.png"
                            alt="Nyxa"
                            className="w-12 h-12 rounded-xl"
                        />
                        <h1 className="text-2xl font-bold">Nyxa</h1>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className={`w-2 h-2 rounded-full transition-all ${currentState === STATES.ACQUISITION ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                            }`} />
                        <div className={`w-2 h-2 rounded-full transition-all ${currentState === STATES.VERIFICATION || currentState === STATES.PROCESSING ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                            }`} />
                        <div className={`w-2 h-2 rounded-full transition-all ${currentState === STATES.FEEDBACK || currentState === STATES.REWARD ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                            }`} />
                    </div>
                </header>

                {/* Main Content - State-based rendering */}
                <main>
                    {/* State 1: Acquisition */}
                    {currentState === STATES.ACQUISITION && (
                        <AcquisitionStep onReady={startVerification} />
                    )}

                    {/* State 2: Verification */}
                    {currentState === STATES.VERIFICATION && (
                        <VerificationStep
                            onFileUpload={uploadFile}
                            errorMessage={errorMessage}
                        />
                    )}

                    {/* State 3: Processing */}
                    {currentState === STATES.PROCESSING && (
                        <ProcessingState message="Analyzing your screenshot..." />
                    )}

                    {/* State 4: Feedback (Failure Path) */}
                    {currentState === STATES.FEEDBACK && analysisResult && (
                        <FeedbackCard
                            message={analysisResult.message}
                            detectedStars={analysisResult.stars}
                            onRetry={retryUpload}
                        />
                    )}

                    {/* State 5: Reward (Success Path) */}
                    {currentState === STATES.REWARD && (
                        <RewardCard />
                    )}
                </main>

                {/* Footer - Only show Start Over when needed */}
                {currentState !== STATES.ACQUISITION && (
                    <footer className="mt-16 text-center">
                        <button
                            onClick={reset}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                        >
                            Start Over
                        </button>
                    </footer>
                )}
            </div>
        </div>
    );
}