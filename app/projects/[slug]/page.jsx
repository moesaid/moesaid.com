import { projects, legalPages, getProjectBySlug } from '@/lib/projects';
import LazyImage from '@/components/lazy-image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Globe, Smartphone, Play } from 'lucide-react';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: `${project.name} — Mohamed S Abdrabou`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const hasLinks = project.links && Object.keys(project.links).length > 0;

    return (
        <main className="min-h-screen flex items-center justify-center py-16 px-6">
            <div className="container-narrow max-w-lg">
                {/* Back */}
                <div className="animate-fade-in opacity-0 mb-10">
                    <Link href="/" className="text-sm text-gray-400 hover:text-black transition-colors">
                        ← Back
                    </Link>
                </div>

                {/* Header */}
                <section className="animate-fade-in opacity-0 text-center" style={{ animationDelay: '0.05s' }}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <LazyImage
                            src={project.logo}
                            alt={project.alt}
                            className="w-10 h-8"
                            width={40}
                            height={32}
                        />
                        <h1 className="text-2xl font-semibold text-black">{project.name}</h1>
                    </div>
                    <p className="text-gray-500 leading-relaxed">{project.description}</p>

                    {project.type === 'app' && (
                        <span className="inline-block mt-3 text-xs font-medium text-gray-400 border border-border rounded-full px-3 py-1">
                            Mobile App
                        </span>
                    )}
                </section>

                {/* Links */}
                {hasLinks && (
                    <section
                        className="mt-10 animate-fade-in opacity-0"
                        style={{ animationDelay: '0.1s' }}
                    >
                        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                            Links
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.links.website && (
                                <a
                                    href={project.links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black ring-1 ring-black transition-colors"
                                >
                                    <Globe className="w-4 h-4" />
                                    Website
                                </a>
                            )}
                            {project.links.appStore && (
                                <a
                                    href={project.links.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black ring-1 ring-black transition-colors"
                                >
                                    <Smartphone className="w-4 h-4" />
                                    App Store
                                </a>
                            )}
                            {project.links.googlePlay && (
                                <a
                                    href={project.links.googlePlay}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-black ring-1 ring-black transition-colors"
                                >
                                    <Play className="w-4 h-4" />
                                    Google Play
                                </a>
                            )}
                        </div>
                    </section>
                )}

                {/* Legal Pages */}
                {project.legal && (
                    <section
                        className="mt-10 animate-fade-in opacity-0"
                        style={{ animationDelay: '0.15s' }}
                    >
                        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                            Legal
                        </h2>
                        <div className="flex flex-col gap-2">
                            {legalPages.map((page) => (
                                <Link
                                    key={page.slug}
                                    href={`/projects/${project.slug}/${page.slug}`}
                                    className="flex items-center justify-between border border-border rounded-lg px-4 py-3 hover:border-black transition-colors"
                                >
                                    <span className="font-medium text-black">{page.title}</span>
                                    <span className="text-gray-400">→</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
