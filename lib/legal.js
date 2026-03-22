/**
 * Centralized legal content templates.
 * Each template function receives the app name and support email,
 * returning JSX-ready markdown-style content.
 */

export const legalTemplates = {
    'privacy-policy': {
        title: 'Privacy Policy',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `Effective Date: December 19, 2025\n\nAt ${appName}, your privacy is our top priority. This policy explains what data we collect, how we use it, and your rights.`,
            },
            {
                heading: '1. Data Collection & Storage',
                body: `We do not collect or store your personal data on our servers.\n\n• App Data: All user data is stored locally on your device in a secure database.\n• Deletion: Deleting the app removes all data associated with it. We cannot recover this data because we do not have a copy.`,
            },
            {
                heading: '2. Permissions We Request',
                body: `${appName} may request certain device permissions to function properly. These permissions are used solely for the app's core features and are never used to collect personal information.`,
            },
            {
                heading: '3. Third-Party Analytics',
                body: `We use aggregated, anonymous analytics (e.g., Firebase, Aptabase) to improve app stability.\n\n• What is sent: Crash reports, app launch success rates, device model.\n• What is NOT sent: Personal data, usage patterns, or personally identifiable information.`,
            },
            {
                heading: '4. Contact',
                body: `For privacy concerns, please contact us at:\n${supportEmail}`,
            },
        ],
    },
    'support': {
        title: 'Support',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `We are here to help you get the best experience with ${appName}.`,
            },
            {
                heading: 'Common Questions',
                body: `• "Where is my data stored?"\nAll data is stored securely on your device. We do not have access to your data.\n\n• "Does ${appName} require an internet connection?"\n${appName} is designed to work offline. An internet connection may be needed for specific features.`,
            },
            {
                heading: 'Troubleshooting',
                body: `If you are experiencing issues:\n\n1. Ensure the app has the required permissions enabled in your device Settings.\n2. Try restarting the app.\n3. If the issue persists, contact us with a description of the problem.`,
            },
            {
                heading: 'Contact Us',
                body: `If you couldn't find an answer above, our team is ready to assist.\n\n• Email: ${supportEmail}\n• Response Time: We aim to reply within 24 hours on business days.`,
            },
        ],
    },
    'terms-of-use': {
        title: 'Terms of Use',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `Last Updated: December 19, 2025\n\nBy downloading or using ${appName} ("Service"), you agree to the terms below.`,
            },
            {
                heading: '1. Disclaimer',
                body: `${appName} is intended for informational and entertainment purposes only. It is not designed to replace professional advice or services of any kind.`,
            },
            {
                heading: '2. Subscriptions & Billing',
                body: `${appName} may offer premium features via in-app purchases.\n\n• Payment: Charged to your Apple ID or Google Play account at confirmation of purchase.\n• Auto-Renewal: Subscriptions automatically renew unless turned off at least 24 hours before the end of the current period.\n• Cancellation: Manage or cancel your subscription in your App Store or Google Play Account Settings. Deleting the app does not cancel the subscription.`,
            },
            {
                heading: '3. User Responsibility',
                body: `• You are responsible for keeping your device secure.\n• Since data is stored locally, you are responsible for backing up your device to prevent data loss.`,
            },
            {
                heading: '4. Intellectual Property',
                body: `The design, content, and source code of ${appName} are protected by copyright law. You may not reverse engineer, decompile, or attempt to extract the source code of the app.`,
            },
            {
                heading: '5. Limitation of Liability',
                body: `To the maximum extent permitted by law, ${appName} and its developers shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.`,
            },
            {
                heading: '6. Changes to Terms',
                body: `We reserve the right to update these terms. Continued use of the app implies acceptance of the new terms.`,
            },
        ],
    },
    'delete-your-account': {
        title: 'Delete Your Account',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `We are sorry to see you go. If you wish to permanently delete your account and all associated data, please follow the instructions below.\n\n⚠️ Warning: This action is permanent and cannot be undone. All your data, including history, settings, and personal information, will be permanently removed.`,
            },
            {
                heading: 'Instructions',
                body: `1. Open the App\nLaunch ${appName} on your device.\n\n2. Go to Profile\nTap on the Profile icon located in the navigation bar.\n\n3. Access Settings\nScroll down to the bottom of the Profile page or look for a Settings (gear icon) button.\n\n4. Initiate Deletion\nLocate the "Delete Account" option at the bottom of the list.\n\n5. Confirm Deletion\nA confirmation dialog will appear. You may be asked to re-enter your password or type "DELETE" to confirm.`,
            },
            {
                heading: 'What Happens Next?',
                body: `• You will be immediately logged out.\n• Your account data will be scheduled for permanent deletion.\n• You will receive a confirmation email stating that your account has been removed.`,
            },
            {
                heading: 'Need Help?',
                body: `If you are unable to delete your account or encounter an error, please contact our support team at ${supportEmail} for manual assistance.`,
            },
        ],
    },
};

export function getLegalContent(legalSlug, appName, supportEmail = 'help@moesaid.com') {
    const template = legalTemplates[legalSlug];
    if (!template) return null;

    return {
        title: template.title,
        sections: template.content(appName, supportEmail),
    };
}
