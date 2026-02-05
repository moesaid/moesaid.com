/**
 * VerificationStep Component (Stateless)
 * File upload interface with drag & drop support
 */

import { useState } from 'react';

export function VerificationStep({ onFileUpload, errorMessage }) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = (file) => {
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);

        // Emit to parent
        onFileUpload(file);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <svg
                        className="w-8 h-8 text-primary"
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

                <h2 className="text-3xl font-bold">Upload Your Screenshot</h2>
                <p className="text-muted-foreground">
                    Show us your 5-star review to claim your exclusive discount
                </p>
            </div>

            {/* Upload Area */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative border-2 border-dashed rounded-xl p-12 text-center transition-all
          ${isDragging ? 'border-primary bg-primary/5 scale-105' : 'border-border hover:border-primary/50'}
          ${preview ? 'bg-muted/30' : ''}
        `}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="file-upload"
                />

                {!preview ? (
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                            <svg
                                className="w-8 h-8 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                        </div>

                        <div>
                            <p className="text-lg font-medium mb-2">
                                Drag & drop your screenshot here
                            </p>
                            <p className="text-sm text-muted-foreground">
                                or click to browse files
                            </p>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            Supports: JPG, PNG, WebP (Max 10MB)
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-h-64 mx-auto rounded-lg shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground">
                            Analyzing your screenshot...
                        </p>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {errorMessage && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {errorMessage}
                </div>
            )}

            {/* Instructions */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                    <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Tips for a valid screenshot
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2 ml-7">
                    <li>• Make sure all 5 stars are clearly visible</li>
                    <li>• Include the app name (Nyxa) in the screenshot</li>
                    <li>• Ensure the image is not blurry or cropped</li>
                </ul>
            </div>

            {/* Manual Fallback Option */}
            <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                    <strong>Having issues?</strong> No worries! Just DM me your screenshot on X and I'll send the redeem link personally 😊
                </p>
                <a
                    href="https://x.com/MohamedSaid__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/80 transition-colors"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @MohamedSaid__
                </a>
            </div>
        </div>
    );
}
