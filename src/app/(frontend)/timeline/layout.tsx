import { type Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Línea de tiempo | Portafolio de Carlos Pulido - Desarrollador Frontend',
        description: 'Explora el portafolio de Carlos Pulido, desarrollador frontend. Descubre proyectos que demuestran experiencia en la creación de interfaces de usuario modernas y responsivas, y conoce mi trayectoria profesional.',

        openGraph: {
            title: 'Línea de tiempo | Portafolio de Carlos Pulido - Desarrollador Frontend',
            description: 'Conoce a Carlos Pulido, un desarrollador frontend apasionado por construir experiencias web increíbles. Explora mi trayectoria y mi enfoque profesional.',
            url: 'https://carlospulido-portafolio.vercel.app/timeline',
            siteName: 'Carlos Pulido - Portafolio',
            images: [
                {
                    url: 'https://carlospulido-portafolio.vercel.app/images/og-image-timeline.png',
                    width: 1200,
                    height: 630,
                    alt: 'Timeline de Carlos Pulido - Desarrollador Frontend',
                },
            ],
            locale: 'es_ES',
            type: 'profile',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Timeline de  Carlos Pulido | Frontend Dev',
            description: 'Descubre el perfil profesional de Carlos Pulido, desarrollador frontend. Trayectoria, habilidades y pasión por la web.',
            creator: '@CarlosFrontEnd',
            images: ['https://carlospulido-portafolio.vercel.app/images/og-image-timeline.png'],
        },
        alternates: {
            canonical: 'https://carlospulido-portafolio.vercel.app/timeline',
        },
        authors: [{ name: 'Carlos Pulido' }],
        keywords: [
            'Sobre Carlos Pulido',
            'Perfil Desarrollador Frontend',
            'Trayectoria Carlos Pulido',
            'Experiencia Desarrollo Web',
            'Desarrollador Frontend España',
            'Historia Profesional Frontend',
            'Quién es Carlos Pulido',
            'Biografía Desarrollador Web',
            'Timeline de Carlos Pulido',
        ],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-video-preview': -1,
                'max-image-preview': 'large',
            },
        },
        metadataBase: new URL('https://carlospulido-portafolio.vercel.app'),
    };
}

export default function TimeLineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
