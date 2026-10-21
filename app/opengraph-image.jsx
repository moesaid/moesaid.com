import { ImageResponse } from 'next/og';
import { OgCard, ogSize, publicImage } from '@/lib/og-image';

export const dynamic = 'force-static';
export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Mohamed S Abdrabou, designer and developer in Cleveland';

export default function Image() {
    return new ImageResponse(
        (
            <OgCard
                logo={publicImage('/fav.png')}
                eyebrow="Designer and engineer in Cleveland, Ohio"
                title="Mohamed S Abdrabou"
                description="I make Duha for masjids, Sleep Key, HoopsGo, and a few open source tools."
            />
        ),
        size
    );
}
