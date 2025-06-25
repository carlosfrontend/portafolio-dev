import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Proyectos | Portafolio de Carlos Pulido - Desarrollador Frontend',

        description: 'Descubre los proyectos de desarrollo frontend de Carlos Pulido. Explora ejemplos de interfaces modernas, responsivas e interactivas construidas con las últimas tecnologías.',

        openGraph: {
            title: 'Proyectos de Carlos Pulido | Desarrollador Frontend',
            description: 'Explora los proyectos de desarrollo frontend de Carlos Pulido, mostrando experiencia en interfaces de usuario y desarrollo web.',
            url: 'https://carlospulido-portafolio.vercel.app/proyectos',
            siteName: 'Carlos Pulido - Portafolio',
            images: [
                {
                    url: 'https://carlospulido-portafolio.vercel.app/images/og-image-proyectos.png',
                    width: 1200,
                    height: 630,
                    alt: 'Proyectos de Desarrollo Frontend de Carlos Pulido',
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },

        twitter: {
            card: 'summary_large_image',
            title: 'Proyectos de Carlos Pulido | Frontend Dev',
            description: 'Echa un vistazo a los proyectos destacados de Carlos Pulido, un desarrollador frontend experto en crear experiencias web modernas.',
            creator: '@CarlosFrontEnd',
            images: ['https://carlospulido-portafolio.vercel.app/images/og-image-proyectos.png'],
        },

        alternates: {
            canonical: 'https://carlospulido-portafolio.vercel.app/proyectos',
        },

        authors: [{ name: 'Carlos Pulido' }],

        keywords: [
            'Proyectos Frontend',
            'Portafolio Desarrollo Web',
            'Carlos Pulido Proyectos',
            'Proyectos React',
            'Proyectos Next.js',
            'Ejemplos de desarrollo web',
            'UX/UI proyectos',
            'Aplicaciones web interactivas',
            'Desarrollador web España',
            'Proyectos de diseño web',
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

        metadataBase: new URL('https://carlospulido-portafolio.vercel.app')
    };
}

export default function ProjectsLayout({
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
