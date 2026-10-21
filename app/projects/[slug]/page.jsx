import { projects, legalPages, getProjectBySlug, projectTypeLabels, siteUrl } from '@/lib/projects';
import { cn } from '@/lib/utils';
import LazyImage from '@/components/lazy-image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Globe, Smartphone, Play, Github, ArrowUpRight } from 'lucide-react';

const linkIcons = {
    website: Globe,
    appStore: Smartphone,
    googlePlay: Play,
    github: Github,
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    const title = `${project.name}: ${project.tagline}`;
    const url = `/projects/${project.slug}`;

    return {
        title,
        description: project.description,
        alternates: { canonical: url },
        openGraph: { title, description: project.description, url, type: 'website' },
        twitter: { title, description: project.description },
    };
}

function projectJsonLd(project) {
    const hrefs = project.links.filter((link) => link.href).map((link) => link.href);
    const website = project.links.find((link) => link.type === 'website')?.href;

    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.name,
        description: project.description,
        url: website || `${siteUrl}/projects/${project.slug}`,
        image: `${siteUrl}${project.logo}`,
        applicationCategory: project.category,
        ...(project.operatingSystem && { operatingSystem: project.operatingSystem }),
        ...(hrefs.length > 0 && { sameAs: hrefs }),
        author: {
            '@type': 'Person',
            name: 'Mohamed S Abdrabou',
            url: siteUrl,
        },
    };
}

function ProjectLink({ link }) {
    const Icon = linkIcons[link.type] || Globe;
    const content = (
        <>
            <span
                className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-full shrink-0',
                    link.comingSoon ? 'bg-gray-100 text-gray-400' : 'bg-black text-white'
                )}
            >
                <Icon className="w-4 h-4" />
            </span>
            <span className="flex flex-col min-w-0 leading-tight">
                <span className={cn('text-sm font-medium', link.comingSoon ? 'text-gray-400' : 'text-black')}>
                    {link.label}
                </span>
                {link.caption && <span className="text-xs text-gray-400 truncate mt-0.5">{link.caption}</span>}
            </span>
            {!link.comingSoon && (
                <ArrowUpRight className="w-4 h-4 ml-auto text-gray-300 transition-colors group-hover:text-black" />
            )}
        </>
    );

    if (link.comingSoon) {
        return (
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3">
                {content}
            </div>
        );
    }

    return (
        <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-3 transition-all hover:border-black hover:shadow-lg hover:shadow-black/5"
        >
            {content}
        </a>
    );
}

function groupLinks(links) {
    const groups = [];
    for (const link of links) {
        const name = link.group || null;
        let group = groups.find((g) => g.name === name);
        if (!group) {
            group = { name, links: [] };
            groups.push(group);
        }
        group.links.push(link);
    }
    return groups;
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const hasLinks = project.links.length > 0;
    const linkGroups = groupLinks(project.links);

    return (
        <main className="min-h-screen flex items-center justify-center py-16 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
            />
            <div className="container-narrow max-w-lg">
                {/* Back */}
                <nav className="animate-fade-in opacity-0 mb-10" aria-label="Breadcrumb">
                    <Link href="/" className="text-sm text-gray-400 hover:text-black transition-colors">
                        Back to all projects
                    </Link>
                </nav>

                {/* Header */}
                <section className="animate-fade-in opacity-0 text-center" style={{ animationDelay: '0.05s' }}>
                    <div className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-border shadow-sm">
                        <LazyImage
                            src={project.logo}
                            alt={project.alt}
                            className="w-10 h-10"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h1 className="text-3xl font-semibold text-black">{project.name}</h1>
                    <p className="mt-1 text-sm font-medium text-gray-400">{project.tagline}</p>
                    <p className="mt-4 text-gray-500 leading-relaxed">{project.description}</p>

                    {projectTypeLabels[project.type] && (
                        <span className="inline-block mt-4 text-xs font-medium text-gray-400 border border-border rounded-full px-3 py-1">
                            {projectTypeLabels[project.type]}
                        </span>
                    )}
                </section>

                {/* Links */}
                <section
                    className="mt-10 animate-fade-in opacity-0"
                    style={{ animationDelay: '0.1s' }}
                >
                    <h2 className="text-sm font-medium text-gray-400 mb-3">
                        {hasLinks ? 'Get it' : 'Links'}
                    </h2>
                    {hasLinks ? (
                        <div className="flex flex-col gap-8">
                            {linkGroups.map((group) => (
                                <div key={group.name || 'main'}>
                                    {group.name && (
                                        <div className="mb-3">
                                            <h3 className="text-base font-semibold text-black">{group.name}</h3>
                                            {project.groups?.[group.name] && (
                                                <p className="text-sm text-gray-500 leading-snug mt-0.5">
                                                    {project.groups[group.name]}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {group.links.map((link) => (
                                            <ProjectLink key={`${link.type}-${link.caption}`} link={link} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-gray-400">
                            Store links coming soon.
                        </p>
                    )}
                </section>

                {/* Legal Pages */}
                {project.legal && (
                    <section
                        className="mt-10 animate-fade-in opacity-0"
                        style={{ animationDelay: '0.15s' }}
                    >
                        <h2 className="text-sm font-medium text-gray-400 mb-3">
                            Legal
                        </h2>
                        <div className="flex flex-col gap-2">
                            {legalPages.map((page) => (
                                <Link
                                    key={page.slug}
                                    href={`/projects/${project.slug}/${page.slug}`}
                                    className="border border-border rounded-lg px-4 py-3 font-medium text-black hover:border-black transition-colors"
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
