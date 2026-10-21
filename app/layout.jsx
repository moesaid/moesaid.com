import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://moesaid.com'),
    title: {
        default: 'Mohamed S Abdrabou, designer and developer in Cleveland',
        template: '%s | Mohamed S Abdrabou',
    },
    description: 'I’m Mohamed, a designer and developer in Cleveland, Ohio. I make Duha for masjids, Sleep Key, HoopsGo, and a few open source tools like Cleopatra and FlutterPP.',
    keywords: ['Mohamed Abdrabou', 'Mohamed Said', 'Full Stack Developer', 'Cleveland Developer', 'UI Designer', 'Flutter Developer', 'React Developer', 'Open Source', 'Duha', 'Masjid Management Software', 'Sleep Key', 'HoopsGo', 'Cleopatra', 'FlutterPP'],
    authors: [{ name: 'Mohamed S Abdrabou' }],
    creator: 'Mohamed S Abdrabou',
    publisher: 'Mohamed S Abdrabou',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'Mohamed S Abdrabou',
        title: 'Mohamed S Abdrabou, designer and developer in Cleveland',
        description: 'I’m Mohamed, a designer and developer in Cleveland, Ohio. I make Duha for masjids, Sleep Key, HoopsGo, and a few open source tools.',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@MohamedSaid__',
        creator: '@MohamedSaid__',
        title: 'Mohamed S Abdrabou, designer and developer in Cleveland',
        description: 'I’m Mohamed, a designer and developer in Cleveland, Ohio. I make Duha for masjids, Sleep Key, and HoopsGo.',
    },
    icons: {
        icon: '/fav.png',
        apple: '/fav.png',
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mohamed S Abdrabou',
        url: 'https://moesaid.com',
        image: 'https://moesaid.com/fav.png',
        jobTitle: 'Full Stack Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'Self-Employed',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cleveland',
            addressRegion: 'OH',
            addressCountry: 'US',
        },
        sameAs: [
            'https://github.com/moesaid',
            'https://dribbble.com/M7amadSa3ed',
            'https://twitter.com/MohamedSaid__',
            'https://www.instagram.com/moe.saiiid/',
        ],
    };

    return (
        <html lang="en" >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
