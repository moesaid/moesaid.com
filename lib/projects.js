export const projects = [
    {
        name: 'RaThemes',
        slug: 'rathemes',
        type: 'website',
        description: 'Premium WordPress themes and templates available on ThemeForest.',
        logo: '/rathemes.png',
        alt: 'RA Themes logo',
        links: {
            website: 'https://themeforest.net/user/ra-themes/portfolio',
        },
    },
    {
        name: 'Cleopatra',
        slug: 'cleopatra',
        type: 'website',
        description: 'An admin dashboard template built on Tailwind CSS with a modern and clean design.',
        logo: '/cleopatra.png',
        alt: 'Admin Dashboard Template Built On Tailwind CSS',
        links: {
            website: 'https://github.com/moesaid/cleopatra',
        },
    },
    {
        name: 'FlutterPP',
        slug: 'flutterpp',
        type: 'website',
        description: 'Your ultimate developer companion, automating code generation and significantly reducing development time.',
        logo: '/flutterpp.png',
        alt: 'FlutterPP - Developer Companion',
        links: {
            website: 'https://github.com/moesaid/flutterpp',
        },
    },
    {
        name: 'SphinxVerify',
        slug: 'sphinxverify',
        type: 'website',
        description: 'A Flutter package that provides an interface to Amazon Rekognition service, with built-in use cases.',
        logo: '/sphinxverify.png',
        alt: 'SphinxVerify - Amazon Rekognition Interface',
        links: {
            website: 'https://github.com/moesaid/sphinxverify',
        },
    },
    {
        name: 'Sleep Key',
        slug: 'sleep-key',
        type: 'app',
        description: 'A sleep tracker and sound app designed to help you monitor and improve your sleep quality.',
        logo: '/sleep-key.png',
        alt: 'Sleep Key - Sleep Tracker, Sound',
        legal: true,
        supportEmail: 'help@moesaid.com',
        links: {
            appStore: 'https://apps.apple.com/us/app/sleep-key-tracker-sound/id6756638306',
            googlePlay: 'https://play.google.com/store/apps/details?id=com.sleepkey.android',
        },
    },
    {
        name: 'YMC',
        slug: 'ymc',
        type: 'website',
        description: 'Young Muslim Club — a platform for community engagement and educational resources.',
        logo: '/ymc.svg',
        alt: 'Young Muslim Club',
        links: {
            website: 'https://youngmuslimclub.com/',
        },
    },
    {
        name: 'HoopsGo',
        slug: 'hoopsgo',
        type: 'app',
        description: 'A basketball game app that lets you shoot hoops and compete for high scores.',
        logo: '/HoopsGo.png',
        alt: 'HoopsGo',
        legal: true,
        supportEmail: 'help@moesaid.com',
        links: {},
    },
];

export const legalPages = [
    { slug: 'privacy-policy', title: 'Privacy Policy' },
    { slug: 'support', title: 'Support' },
    { slug: 'terms-of-use', title: 'Terms of Use' },
    { slug: 'delete-your-account', title: 'Delete Your Account' },
];

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug) || null;
}
