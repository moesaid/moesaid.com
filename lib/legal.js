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
                body: `Effective Date: December 19, 2025\n\nThis page explains what data ${appName} collects, how we use it, and what your rights are.`,
            },
            {
                heading: '1. What we collect and where it lives',
                body: `We don't collect or store your personal data on our servers.\n\n• Your data: Everything you save stays on your device, in a secure local database.\n• Deleting it: Removing the app removes your data too. We can't get it back for you, because we never had a copy.`,
            },
            {
                heading: '2. Permissions',
                body: `${appName} may ask for a few device permissions so it can work. We only use them for the app's main features, never to collect personal information.`,
            },
            {
                heading: '3. Analytics',
                body: `We use anonymous, aggregated analytics (like Firebase and Aptabase) to find crashes and keep the app stable.\n\n• What we get: Crash reports, whether the app launched fine, and your device model.\n• What we don't get: Your personal data, how you use the app, or anything that identifies you.`,
            },
            {
                heading: '4. Contact',
                body: `Questions about your privacy? Email us at ${supportEmail}.`,
            },
        ],
    },
    'support': {
        title: 'Support',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `Having trouble with ${appName}? Start here.`,
            },
            {
                heading: 'Common questions',
                body: `• "Where is my data stored?"\nOn your device. We don't have access to it.\n\n• "Does ${appName} require an internet connection?"\nMostly no. ${appName} works offline, though a few features need a connection.`,
            },
            {
                heading: 'Troubleshooting',
                body: `If something isn't working:\n\n1. Check that the app has the permissions it needs in your device Settings.\n2. Close the app and open it again.\n3. Still stuck? Email us and tell us what happened.`,
            },
            {
                heading: 'Contact us',
                body: `Didn't find your answer? Just email us.\n\n• Email: ${supportEmail}\n• We usually reply within 24 hours on business days.`,
            },
        ],
    },
    'terms-of-use': {
        title: 'Terms of Use',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `Last Updated: December 19, 2025\n\nBy downloading or using ${appName} (the "Service"), you agree to these terms.`,
            },
            {
                heading: '1. Disclaimer',
                body: `${appName} is intended for informational and entertainment purposes only. It is not designed to replace professional advice or services of any kind.`,
            },
            {
                heading: '2. Subscriptions and billing',
                body: `${appName} may offer premium features via in-app purchases.\n\n• Payment: Charged to your Apple ID or Google Play account at confirmation of purchase.\n• Auto-Renewal: Subscriptions automatically renew unless turned off at least 24 hours before the end of the current period.\n• Cancellation: Manage or cancel your subscription in your App Store or Google Play Account Settings. Deleting the app does not cancel the subscription.`,
            },
            {
                heading: '3. Your responsibility',
                body: `• You are responsible for keeping your device secure.\n• Since data is stored locally, you are responsible for backing up your device to prevent data loss.`,
            },
            {
                heading: '4. Intellectual property',
                body: `The design, content, and source code of ${appName} are protected by copyright law. You may not reverse engineer, decompile, or attempt to extract the source code of the app.`,
            },
            {
                heading: '5. Limitation of liability',
                body: `To the maximum extent permitted by law, ${appName} and its developers shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.`,
            },
            {
                heading: '6. Changes to these terms',
                body: `We reserve the right to update these terms. Continued use of the app implies acceptance of the new terms.`,
            },
        ],
    },
    'delete-your-account': {
        title: 'Delete Your Account',
        content: (appName, supportEmail) => [
            {
                heading: null,
                body: `Sorry to see you go. Here's how to delete your account and everything tied to it.\n\nPlease note: this can't be undone. Your history, settings, and personal information will all be deleted for good.`,
            },
            {
                heading: 'Instructions',
                body: `1. Open the App\nLaunch ${appName} on your device.\n\n2. Go to Profile\nTap the Profile icon in the navigation bar.\n\n3. Access Settings\nScroll to the bottom of the Profile page, or tap the Settings (gear) button.\n\n4. Initiate Deletion\nLocate the "Delete Account" option at the bottom of the list.\n\n5. Confirm Deletion\nA confirmation dialog will appear. You may be asked to re-enter your password or type "DELETE" to confirm.`,
            },
            {
                heading: 'What happens next',
                body: `• You will be immediately logged out.\n• Your account data will be scheduled for permanent deletion.\n• You will receive a confirmation email stating that your account has been removed.`,
            },
            {
                heading: 'Need help?',
                body: `If you can't delete your account or you run into an error, email us at ${supportEmail} and we'll take care of it.`,
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
