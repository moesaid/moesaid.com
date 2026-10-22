import { projects, legalPages, siteUrl } from '@/lib/projects';

export const dynamic = 'force-static';

export default function sitemap() {
    const projectPages = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        changeFrequency: 'monthly',
        priority: project.featured ? 0.9 : 0.7,
    }));

    const legal = projects
        .filter((project) => project.legal)
        .flatMap((project) =>
            legalPages.map((page) => ({
                url: `${siteUrl}/projects/${project.slug}/${page.slug}`,
                changeFrequency: 'yearly',
                priority: 0.2,
            }))
        );

    return [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }, ...projectPages, ...legal];
}
