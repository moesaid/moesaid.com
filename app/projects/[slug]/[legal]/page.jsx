import { projects, legalPages, getProjectBySlug } from '@/lib/projects';
import { getLegalContent } from '@/lib/legal';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    const params = [];
    for (const project of projects) {
        if (project.legal) {
            for (const page of legalPages) {
                params.push({
                    slug: project.slug,
                    legal: page.slug,
                });
            }
        }
    }
    return params;
}

export async function generateMetadata({ params }) {
    const { slug, legal } = await params;
    const project = getProjectBySlug(slug);
    const legalData = getLegalContent(legal, project?.name);
    if (!project || !legalData) return {};

    return {
        title: `${legalData.title} — ${project.name}`,
        description: `${legalData.title} for ${project.name}`,
    };
}

export default async function LegalPage({ params }) {
    const { slug, legal } = await params;
    const project = getProjectBySlug(slug);

    if (!project || !project.legal) notFound();

    const legalData = getLegalContent(legal, project.name, project.supportEmail);
    if (!legalData) notFound();

    return (
        <main className="min-h-screen flex items-center justify-center py-16 px-6">
            <div className="container-narrow max-w-lg">
                {/* Back */}
                <div className="animate-fade-in opacity-0 mb-10">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm text-gray-400 hover:text-black transition-colors"
                    >
                        ← {project.name}
                    </Link>
                </div>

                {/* Content */}
                <section className="animate-fade-in opacity-0" style={{ animationDelay: '0.05s' }}>
                    <h1 className="text-2xl font-semibold text-black mb-8">{legalData.title}</h1>

                    <div className="space-y-6">
                        {legalData.sections.map((section, index) => (
                            <div key={index}>
                                {section.heading && (
                                    <h2 className="text-sm font-semibold text-black mb-2">
                                        {section.heading}
                                    </h2>
                                )}
                                <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
