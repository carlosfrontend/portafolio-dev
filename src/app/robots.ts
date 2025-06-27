import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/studio', '/api'],
      },
      {
        userAgent: ['Applebot', 'Bingbot', 'SemrushBot'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://carlospulido-portafolio.vercel.app/sitemap.xml',
  }
}