import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://moesaid.com'),
    title: 'Mohamed S Abdrabou — Full Stack Developer in Cleveland',
    description: 'Full Stack Developer based in Cleveland, Ohio. Specializing in modern development, UI/UX design, and open source contributions.',
    keywords: ['Mohamed Abdrabou', 'Full Stack Developer', 'Cleveland Developer', 'UI Designer', 'React Developer', 'Open Source', 'Qena App', 'Cleopatra'],
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
        url: 'https://moesaid.com/',
        siteName: 'Mohamed S Abdrabou Portfolio',
        title: 'Mohamed S Abdrabou — Full Stack Developer in Cleveland',
        description: 'Full Stack Developer based in Cleveland, Ohio. Specializing in modern development, UI/UX design, and open source contributions.',
        images: [
            {
                url: '/fav.png',
                alt: 'Mohamed S Abdrabou - Full Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@MohamedSaid__',
        creator: '@MohamedSaid__',
        title: 'Mohamed S Abdrabou — Full Stack Developer',
        description: 'Full Stack Developer based in Cleveland, Ohio.',
        images: ['/fav.png'],
    },
    icons: {
        icon: '/fav.png',
        apple: '/fav.png',
    },
    alternates: {
        canonical: 'https://moesaid.com/',
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
