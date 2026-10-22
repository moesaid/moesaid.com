import { ImageResponse } from 'next/og';
import { projects, getProjectBySlug } from '@/lib/projects';
import { OgCard, ogSize, publicImage } from '@/lib/og-image';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Project by Mohamed S Abdrabou';

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    return new ImageResponse(
        (
            <OgCard
                logo={publicImage(project.logo)}
                eyebrow={project.tagline}
                title={project.name}
                description={project.description}
            />
        ),
        size
    );
}
