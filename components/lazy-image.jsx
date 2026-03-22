'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function LazyImage({ src, alt, className, width, height }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={cn('relative flex items-center justify-center', className)} style={{ width, height }}>
            {!loaded && (
                <div className="absolute inset-0 bg-gray-100 rounded animate-pulse" />
            )}
            <Image
                src={src}
                alt={alt}
                className={cn(
                    'object-contain transition-opacity duration-300',
                    loaded ? 'opacity-100' : 'opacity-0'
                )}
                width={width}
                height={height}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
