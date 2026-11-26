import type { MetadataRoute } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    BUSINESS_CONFIG.domain || 'https://ftmarketec.vercel.app'
  ).replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

