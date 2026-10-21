export const siteUrl = 'https://moesaid.com';

// Each link: { type: 'website' | 'googlePlay' | 'appStore' | 'github', label, caption?, href?, comingSoon?, group? }
// Links that share a `group` are shown together under that name, with an optional note from `groups`.
export const projects = [
    {
        name: 'Duha',
        slug: 'duha',
        type: 'platform',
        featured: true,
        tagline: 'Software for running a masjid',
        summary: 'On the web and Android now, with iOS on the way.',
        description: 'I’m building Duha to help masjids handle membership, donations, events, Islamic school, and announcements in one place.',
        logo: '/duha.svg',
        alt: 'Duha logo',
        category: 'BusinessApplication',
        operatingSystem: 'Web, Android',
        groups: {
            'Community app': 'For the people who pray, give, and volunteer at the masjid.',
            'Masjid signage': 'For the screens on the masjid walls: prayer times, events, and announcements.',
        },
        links: [
            { type: 'website', label: 'Website', caption: 'duha.app', href: 'https://duha.app/' },
            {
                group: 'Community app',
                type: 'googlePlay',
                label: 'Google Play',
                caption: 'Android',
                href: 'https://play.google.com/store/apps/details?id=app.duha.android',
            },
            { group: 'Community app', type: 'appStore', label: 'App Store', caption: 'iOS, coming soon', comingSoon: true },
            {
                group: 'Masjid signage',
                type: 'googlePlay',
                label: 'Google Play',
                caption: 'Android',
                href: 'https://play.google.com/store/apps/details?id=app.duha.kiosk',
            },
            { group: 'Masjid signage', type: 'appStore', label: 'App Store', caption: 'iOS, coming soon', comingSoon: true },
        ],
    },
    {
        name: 'Cleopatra',
        slug: 'cleopatra',
        type: 'open-source',
        tagline: 'A free admin dashboard',
        description: 'A free, open source admin dashboard I designed and built with Tailwind CSS.',
        logo: '/cleopatra.png',
        alt: 'Cleopatra logo',
        category: 'DeveloperApplication',
        operatingSystem: 'Web',
        links: [
            { type: 'github', label: 'GitHub', caption: 'moesaid/cleopatra', href: 'https://github.com/moesaid/cleopatra' },
        ],
    },
    {
        name: 'FlutterPP',
        slug: 'flutterpp',
        type: 'open-source',
        tagline: 'Less boilerplate for Flutter',
        description: 'A tool I made so I could stop writing the same Flutter code by hand on every project. It generates it for you.',
        logo: '/flutterpp.png',
        alt: 'FlutterPP logo',
        category: 'DeveloperApplication',
        links: [
            { type: 'github', label: 'GitHub', caption: 'moesaid/flutterpp', href: 'https://github.com/moesaid/flutterpp' },
        ],
    },
    {
        name: 'SphinxVerify',
        slug: 'sphinxverify',
        type: 'open-source',
        tagline: 'Amazon Rekognition for Flutter',
        description: 'A Flutter package that connects your app to Amazon Rekognition, with the common cases already wired up.',
        logo: '/sphinxverify.png',
        alt: 'SphinxVerify logo',
        category: 'DeveloperApplication',
        operatingSystem: 'iOS, Android',
        links: [
            { type: 'github', label: 'GitHub', caption: 'moesaid/sphinxverify', href: 'https://github.com/moesaid/sphinxverify' },
        ],
    },
    {
        name: 'Sleep Key',
        slug: 'sleep-key',
        type: 'app',
        tagline: 'Track your sleep, fall asleep easier',
        description: 'An app that tracks how you sleep and plays sounds to help you drift off.',
        logo: '/sleep-key.png',
        alt: 'Sleep Key logo',
        category: 'HealthApplication',
        operatingSystem: 'iOS, Android',
        legal: true,
        supportEmail: 'help@moesaid.com',
        links: [
            {
                type: 'appStore',
                label: 'App Store',
                caption: 'iPhone',
                href: 'https://apps.apple.com/us/app/sleep-key-tracker-sound/id6756638306',
            },
            {
                type: 'googlePlay',
                label: 'Google Play',
                caption: 'Android',
                href: 'https://play.google.com/store/apps/details?id=com.sleepkey.android',
            },
        ],
    },
    {
        name: 'HoopsGo',
        slug: 'hoopsgo',
        type: 'app',
        tagline: 'A basketball game I made for my daughter',
        description: 'I built this one for my daughter. Shoot some hoops, beat your high score, and have fun together.',
        logo: '/HoopsGo.png',
        alt: 'HoopsGo logo',
        category: 'GameApplication',
        operatingSystem: 'iOS, Android',
        legal: true,
        supportEmail: 'help@moesaid.com',
        links: [
            {
                type: 'appStore',
                label: 'App Store',
                caption: 'iPhone',
                href: 'https://apps.apple.com/us/app/hoopsgo/id6760942689',
            },
            {
                type: 'googlePlay',
                label: 'Google Play',
                caption: 'Android',
                href: 'https://play.google.com/store/apps/details?id=com.hoopsgo.android',
            },
        ],
    },
];

export const projectTypeLabels = {
    platform: 'Web and mobile',
    app: 'Mobile app',
    'open-source': 'Open source',
};

export const legalPages = [
    { slug: 'privacy-policy', title: 'Privacy Policy' },
    { slug: 'support', title: 'Support' },
    { slug: 'terms-of-use', title: 'Terms of Use' },
    { slug: 'delete-your-account', title: 'Delete Your Account' },
];

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) || null;
}
