import { siteUrl } from '@/lib/projects';

export const dynamic = 'force-static';

export default function robots() {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
