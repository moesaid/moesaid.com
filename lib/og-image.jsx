import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const ogSize = { width: 1200, height: 630 };

const mimeTypes = { png: 'image/png', svg: 'image/svg+xml' };

// Inline a file from /public as a data URI so the image renders at build time.
export function publicImage(path) {
    const ext = path.split('.').pop().toLowerCase();
    const data = readFileSync(join(process.cwd(), 'public', path)).toString('base64');
    return `data:${mimeTypes[ext] || 'image/png'};base64,${data}`;
}

export function OgCard({ logo, eyebrow, title, description }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '72px 80px',
                background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
                color: '#1a1a1a',
                fontFamily: 'sans-serif',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                {logo && (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 112,
                            height: 112,
                            borderRadius: 28,
                            background: '#ffffff',
                            border: '2px solid #e6e6e6',
                        }}
                    >
                        <img src={logo} width={72} height={72} style={{ objectFit: 'contain' }} />
                    </div>
                )}
                <div style={{ display: 'flex', fontSize: 28, color: '#6b6b6b' }}>
                    {eyebrow}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{title}</div>
                <div style={{ display: 'flex', fontSize: 34, color: '#5c5c5c', lineHeight: 1.35, maxWidth: 1000 }}>{description}</div>
            </div>
            <div style={{ display: 'flex', fontSize: 26, color: '#3b82f6' }}>moesaid.com</div>
        </div>
    );
}
