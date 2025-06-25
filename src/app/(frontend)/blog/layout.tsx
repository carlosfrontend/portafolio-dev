import React from 'react';
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog | Carlos Pulido - Artículos sobre Desarrollo Frontend',

        description: 'Explora el blog de Carlos Pulido. Artículos y tutoriales sobre desarrollo frontend, React, Next.js, buenas prácticas, trucos de programación y últimas tendencias.',

        openGraph: {
            title: 'Blog de Carlos Pulido | Desarrollo Frontend y Más',
            description: 'Accede a los últimos artículos y tutoriales de Carlos Pulido sobre desarrollo web frontend, tecnologías y experiencias.',
            url: 'https://carlospulido-portafolio.vercel.app/blog',
            siteName: 'Blog de Carlos Pulido',
            images: [
                {
                    url: 'https://carlospulido-portafolio.vercel.app/images/og-image-blog.png',
                    width: 1200,
                    height: 630,
                    alt: 'Blog de Carlos Pulido - Artículos sobre Desarrollo Frontend',
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },

        twitter: {
            card: 'summary_large_image',
            title: 'Blog Frontend de Carlos Pulido',
            description: 'Últimas noticias, tutoriales y reflexiones sobre desarrollo web frontend y tecnología por Carlos Pulido.',
            creator: '@CarlosFrontEnd',
            images: ['https://carlospulido-portafolio.vercel.app/images/og-image-blog.jpg'],
        },

        alternates: {
        },
        authors: [{ name: 'Carlos Pulido' }],

        keywords: [
            'Blog Desarrollo Frontend',
            'Carlos Pulido Blog',
            'Artículos Programación Web',
            'Tutoriales React',
            'Guías Next.js',
            'Consejos Desarrollo Web',
            'Noticias Frontend',
            'Tecnología Web',
            'Trucos CSS',
            'JavaScript Avanzado',
            'Experiencia de Usuario',
            'SEO para Desarrolladores',
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

        metadataBase: new URL('https://carlospulido-portafolio.vercel.app'), // *** IMPORTANTE: Reemplaza con la URL base de tu sitio web ***
    };
}

// Este es el componente Layout para la sección del blog.
// Envuelve el contenido de las páginas y posts de tu blog.
export default function BlogLayout({
    children, // Prop children para renderizar el contenido de page.tsx o de posts individuales
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
