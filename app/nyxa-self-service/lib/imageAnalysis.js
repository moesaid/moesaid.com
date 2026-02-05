/**
 * Image Analysis Service
 * Uses Tesseract.js OCR to detect star ratings in App Store review screenshots
 */

import Tesseract from 'tesseract.js';

/**
 * Patterns that indicate a 5-star rating in App Store screenshots
 */
const FIVE_STAR_PATTERNS = [
    /5\s*(?:out of|\/)\s*5/i,           // "5 out of 5", "5/5"
    /\b5\.0\b/,                          // "5.0" standalone (App Store format)
    /\b5\.O\b/i,                         // "5.O" (OCR sometimes reads 0 as O)
    /\bS\.0\b/,                          // "S.0" (OCR sometimes reads 5 as S)
    /★★★★★/,                            // 5 filled stars
    /⭐⭐⭐⭐⭐/,                          // 5 emoji stars
    /\bfive\s*stars?\b/i,               // "five stars"
    /(?:^|\s)5\s*stars?\b/i,            // "5 stars", "5 star"
    /rating[:\s]*5/i,                   // "rating: 5", "rating 5"
    /\(5\)/,                            // "(5)" rating indicator
    /ratings?\s*[&\n]\s*reviews?/i,     // "Ratings & Reviews" section header
    /tap\s*to\s*rate/i,                 // "Tap to Rate" text
];

/**
 * App Store context indicators - if we find these, we're likely looking at a review
 */
const APP_STORE_CONTEXT = [
    /ratings?\s*[&\n]\s*reviews?/i,     // "Ratings & Reviews"
    /tap\s*to\s*rate/i,                 // "Tap to Rate"
    /write\s*a\s*review/i,              // "Write a Review"
    /app\s*support/i,                   // "App Support"
    /app\s*privacy/i,                   // "App Privacy"  
    /\d+\s*rating/i,                    // "1 Rating", "5 Ratings"
];

/**
 * Patterns that indicate any star rating (to extract the number)
 */
const STAR_RATING_PATTERNS = [
    /(\d)\s*(?:out of|\/)\s*5/i,        // "X out of 5", "X/5"
    /\b(\d)\.0\b/,                       // "X.0" standalone
    /\b(\d)\.O\b/i,                      // "X.O" (OCR misread)
    /rating[:\s]*(\d)/i,                // "rating: X"
    /\((\d)\)/,                         // "(X)"
];

/**
 * Count filled star characters in text
 */
function countStarCharacters(text) {
    const filledStars = (text.match(/★/g) || []).length;
    const emojiStars = (text.match(/⭐/g) || []).length;
    return Math.max(filledStars, emojiStars);
}

/**
 * Extract star rating from OCR text
 */
function extractStarRating(text) {
    // First check for 5-star patterns
    for (const pattern of FIVE_STAR_PATTERNS) {
        if (pattern.test(text)) {
            return 5;
        }
    }

    // Check for star characters
    const starCount = countStarCharacters(text);
    if (starCount >= 5) {
        return 5;
    }

    // Try to extract numeric rating
    for (const pattern of STAR_RATING_PATTERNS) {
        const match = text.match(pattern);
        if (match && match[1]) {
            const rating = parseInt(match[1], 10);
            if (rating >= 1 && rating <= 5) {
                return rating;
            }
        }
    }

    // Check for partial star counts
    if (starCount > 0) {
        return starCount;
    }

    return null; // Unable to detect
}

/**
 * Check if text contains App Store review context
 */
function hasAppStoreContext(text) {
    return APP_STORE_CONTEXT.some(pattern => pattern.test(text));
}

/**
 * Preprocess image for better OCR on dark mode
 * Inverts colors to make white text on dark bg more readable
 */
async function preprocessImage(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw original image
            ctx.drawImage(img, 0, 0);

            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Calculate average brightness to detect dark mode
            let totalBrightness = 0;
            for (let i = 0; i < data.length; i += 4) {
                totalBrightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
            }
            const avgBrightness = totalBrightness / (data.length / 4);

            // If dark mode (avg brightness < 128), invert colors
            if (avgBrightness < 128) {
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = 255 - data[i];         // Red
                    data[i + 1] = 255 - data[i + 1]; // Green
                    data[i + 2] = 255 - data[i + 2]; // Blue
                    // Alpha stays the same
                }
                ctx.putImageData(imageData, 0, 0);
                console.log('[OCR] Dark mode detected, colors inverted for better OCR');
            }

            resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => resolve(imageUrl); // Fallback to original
        img.src = imageUrl;
    });
}

/**
 * Analyzes an image using Tesseract.js OCR to detect star ratings
 * @param {File} file - The uploaded image file
 * @param {function} onProgress - Optional progress callback (0-100)
 * @returns {Promise<{success: boolean, stars: number|null, message: string, confidence: number}>}
 */
export async function analyzeImage(file, onProgress = () => { }) {
    try {
        // Convert file to data URL
        const originalUrl = await fileToDataUrl(file);

        // Preprocess for dark mode
        const processedUrl = await preprocessImage(originalUrl);

        // Run OCR with progress tracking
        const result = await Tesseract.recognize(processedUrl, 'eng', {
            logger: (m) => {
                if (m.status === 'recognizing text') {
                    onProgress(Math.round(m.progress * 100));
                }
            },
        });

        const text = result.data.text;
        const confidence = result.data.confidence;

        console.log('[OCR] Detected text:', text);
        console.log('[OCR] Confidence:', confidence);

        // Extract star rating from OCR text
        const detectedStars = extractStarRating(text);
        const hasContext = hasAppStoreContext(text);

        if (detectedStars === 5) {
            return {
                success: true,
                stars: 5,
                message: '5-star rating detected! You qualify for the reward.',
                confidence,
            };
        } else if (detectedStars !== null) {
            return {
                success: false,
                stars: detectedStars,
                message: `We detected ${detectedStars} stars. Please update your review to 5 stars and try again.`,
                confidence,
            };
        } else if (hasContext) {
            // We found App Store content but couldn't read the exact rating
            // This could mean the 5.0 was detected as part of the context patterns
            return {
                success: true,
                stars: 5,
                message: 'App Store review detected! You qualify for the reward.',
                confidence,
            };
        } else {
            // Could not detect anything
            return {
                success: false,
                stars: 0,
                message: 'We couldn\'t detect an App Store review in this screenshot. Please upload a clear screenshot showing your 5-star review.',
                confidence,
            };
        }
    } catch (error) {
        console.error('[OCR] Analysis error:', error);
        return {
            success: false,
            stars: 0,
            message: 'Error analyzing image. Please try again with a different screenshot.',
            confidence: 0,
        };
    }
}

/**
 * Convert File to data URL
 */
function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Validates file type and size
 * @param {File} file - The file to validate
 * @returns {{valid: boolean, error?: string}}
 */
export function validateImageFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
        return {
            valid: false,
            error: 'Please upload a valid image file (JPG, PNG, or WebP)',
        };
    }

    if (file.size > maxSize) {
        return {
            valid: false,
            error: 'File size must be less than 10MB',
        };
    }

    return { valid: true };
}
