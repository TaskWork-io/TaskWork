import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://thegridhub.co'
  const now = new Date().toISOString()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/login`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/why-thegridhub`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 }
  ]
}

