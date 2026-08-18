import { MetadataRoute } from 'next';
import { CLIENTS_LIST } from '@/lib/clientData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.roshanenterprises.co.in';

  const baseRoutes = [
    '',
    '/about',
    '/services',
    '/services/painting',
    '/services/flooring',
    '/services/civil-works',
    '/projects',
    '/industries',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  const clientRoutes = CLIENTS_LIST.map((client) => `/clients/${client.slug}`);

  const allRoutes = [...baseRoutes, ...clientRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
