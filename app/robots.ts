import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://thegridhub.co'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin']
    },
    sitemap: `${base}/sitemap.xml`
  }
}

