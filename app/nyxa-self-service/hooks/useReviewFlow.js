'use client';

import { useState, useCallback } from 'react';
import { analyzeImage, validateImageFile } from '../lib/imageAnalysis';

/**
 * Flow States
 */
const FLOW_STATES = {
    ACQUISITION: 'acquisition',
    VERIFICATION: 'verification',
    PROCESSING: 'processing',
    FEEDBACK: 'feedback',
    REWARD: 'reward',
};

/**
 * Custom hook for managing the Review & Reward flow
 * This is the single source of truth for the entire flow state
 */
export function useReviewFlow() {
    // Current state in the flow
    const [currentState, setCurrentState] = useState(FLOW_STATES.ACQUISITION);

    // Data state
    const [uploadedFile, setUploadedFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    /**
     * Action: User is ready to start verification
     */
    const startVerification = useCallback(() => {
        setCurrentState(FLOW_STATES.VERIFICATION);
        setErrorMessage(null);
    }, []);

    /**
     * Action: User uploads a file
     */
    const uploadFile = useCallback(async (file) => {
        // Validate file
        const validation = validateImageFile(file);
        if (!validation.valid) {
            setErrorMessage(validation.error);
            return;
        }

        // Store file and move to processing state
        setUploadedFile(file);
        setCurrentState(FLOW_STATES.PROCESSING);
        setErrorMessage(null);

        try {
            // Analyze the image
            const result = await analyzeImage(file);
            setAnalysisResult(result);

            // Transition to appropriate state based on result
            if (result.success) {
                setCurrentState(FLOW_STATES.REWARD);
            } else {
                setCurrentState(FLOW_STATES.FEEDBACK);
            }
        } catch (error) {
            setErrorMessage('An error occurred while processing your image. Please try again.');
            setCurrentState(FLOW_STATES.VERIFICATION);
        }
    }, []);

    /**
     * Action: User wants to retry after feedback
     */
    const retryUpload = useCallback(() => {
        setCurrentState(FLOW_STATES.VERIFICATION);
        setUploadedFile(null);
        setAnalysisResult(null);
        setErrorMessage(null);
    }, []);

    /**
     * Action: Reset the entire flow
     */
    const reset = useCallback(() => {
        setCurrentState(FLOW_STATES.ACQUISITION);
        setUploadedFile(null);
        setAnalysisResult(null);
        setErrorMessage(null);
    }, []);

    return {
        // State
        currentState,
        uploadedFile,
        analysisResult,
        errorMessage,

        // Actions
        startVerification,
        uploadFile,
        retryUpload,
        reset,

        // Constants (for UI to check state)
        STATES: FLOW_STATES,
    };
}
