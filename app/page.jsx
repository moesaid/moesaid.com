import { cn } from '@/lib/utils';

export default function Home() {
    const projects = [
        {
            name: 'RaThemes',
            href: 'https://themeforest.net/user/ra-themes/portfolio',
            logo: '/rathemes.png',
            alt: 'RA Themes logo',
        },
        {
            name: 'Cleopatra',
            href: 'https://github.com/moesaid/cleopatra',
            logo: '/cleopatra.png',
            alt: 'Admin Dashboard Template Built On Tailwind CSS',
        },
        {
            name: 'FlutterPP',
            href: 'https://github.com/moesaid/flutterpp',
            logo: '/flutterpp.png',
            alt: 'FlutterPP is designed to be your ultimate developer companion, automating code generation and significantly reducing development time.',
        },
        {
            name: 'SphinxVerify',
            href: 'https://github.com/moesaid/sphinxverify',
            logo: '/sphinxverify.png',
            alt: 'SphinxVerify is a Flutter package that aims to provide an interface to amazon recognition service, with built-in use cases.',
        },
        {
            name: 'Nyxa',
            href: 'https://apps.apple.com/us/app/nyxa-sleep-tracker-sound/id6756638306',
            logo: '/nyxa.png',
            alt: 'Nyxa - Sleep Tracker, Sound',
        },
    ];

    return (
        <main className="min-h-screen flex items-center justify-center py-16 px-6">
            <div className="container-narrow">
                {/* Hero Section */}
                <section className="animate-fade-in opacity-0" style={{ animationDelay: '0s' }}>
                    <h1 className="sr-only">Mohamed S Abdrabou - Full Stack Developer Portfolio</h1>
                    <p className="text-lg leading-relaxed text-center">
                        Hi! I&apos;m <strong>Mohamed</strong>, a{' '}
                        <a
                            href="https://dribbble.com/M7amadSa3ed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                        >
                            Designer
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/moesaid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                        >
                            Engineer
                        </a>
                        ,{' '}
                        <a
                            href="https://twitter.com/MohamedSaid__"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                        >
                            Friend
                        </a>
                        , and{' '}
                        <a
                            href="https://www.instagram.com/moe.saiiid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                        >
                            Weight Lifter
                        </a>{' '}
                        based in Cleveland, Ohio.{' '}
                        <a
                            href="https://www.google.com/search?q=molokhia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                        >
                            Molokhia
                        </a>{' '}
                        is a lifetime purpose!
                    </p>
                    <p className="text-lg leading-relaxed text-center mt-4">
                        <a href="mailto:masedup@gmail.com" className="link-underline" target="_blank">
                            Say hi
                        </a>{' '}
                        →
                    </p>
                </section>

                {/* Projects Section */}
                <section
                    className="mt-16 animate-fade-in opacity-0"
                    style={{ animationDelay: '0.15s' }}
                    aria-labelledby="projects-heading"
                >
                    <h2 id="projects-heading" className="section-title text-center mb-6">
                        Projects
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {projects.map((project, index) => (
                            <a
                                key={project.name}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    'bg-white border border-border rounded-xl px-6 py-4',
                                    'flex items-center gap-3',
                                    'transition-all duration-250 ease-out',
                                    'hover:border-border/50 hover:shadow-lg hover:-translate-y-0.5',
                                    'active:translate-y-0',
                                    'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]'
                                )}
                            >
                                <img
                                    src={project.logo}
                                    alt={project.alt}
                                    className="w-8 h-6 object-contain"
                                    loading="lazy"
                                    width="32"
                                    height="24"
                                />
                                <span className="font-medium text-black">{project.name}</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
