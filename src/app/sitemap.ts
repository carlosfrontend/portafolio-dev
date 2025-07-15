import { MetadataRoute } from 'next';
import type { SanityDocument } from '@sanity/client';
import { client } from '@/sanity/lib/client';

async function getPostsData() {
    const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": _updatedAt
  }`;
    const data = await client.fetch(query);
    return data;
}

async function getProjectsData() {
    const query = `*[_type == "project"] {
    "currentSlug": slug.current,
      "updated": _updatedAt
  }`;
    const data = await client.fetch(query);
    return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postsData = await getPostsData();
    const projectsData = await getProjectsData();
    const posts: MetadataRoute.Sitemap = postsData.map((post: SanityDocument) => ({
        url: `https://carlospulido-portafolio.vercel.app/blog/${post.currentSlug}`,
        lastModified: post.lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const projects: MetadataRoute.Sitemap = projectsData.map((project: SanityDocument) => ({
        url: `https://carlospulido-portafolio.vercel.app/projects/${project.currentSlug}`,
        lastModified: project.lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [
        {
            url: 'https://carlospulido-portafolio.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://carlospulido-portafolio.vercel.app/timeline',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://carlospulido-portafolio.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://carlospulido-portafolio.vercel.app/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...posts,
        ...projects
    ];
}

