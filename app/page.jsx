import { cn } from '@/lib/utils';
import { projects } from '@/lib/projects';
import LazyImage from '@/components/lazy-image';
import Link from 'next/link';

export default function Home() {

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
                            <Link
                                key={project.name}
                                href={`/projects/${project.slug}`}
                                className={cn(
                                    'bg-white border border-border rounded-xl px-6 py-4',
                                    'flex items-center gap-3',
                                    'transition-all duration-250 ease-out',
                                    'hover:border-black hover:shadow-lg hover:shadow-black/10 ',
                                    'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]'
                                )}
                            >
                                <LazyImage
                                    src={project.logo}
                                    alt={project.alt}
                                    className="w-8 h-6"
                                    width={32}
                                    height={24}
                                />
                                <span className="font-medium text-black">{project.name}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
