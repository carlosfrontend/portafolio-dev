import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
    locations: {
        // Add more locations for other post types
        post: defineLocations({
            select: {
                title: 'title',
                slug: 'slug.current',
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || 'Untitled',
                        href: `/blog/${doc?.slug}`,
                    },
                    { title: 'Blog index', href: `/blog` },
                ],
            }),
        }),
        project: defineLocations({
            select: {
                title: 'title',
                slug: 'slug.current',
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || 'Untitled',
                        href: `/projects/${doc?.slug}`,
                    },
                    { title: 'Projects index', href: `/projects` },
                ],
            }),
        }),
    },
}