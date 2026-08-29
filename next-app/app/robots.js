export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: 'YOUR-REAL-DOMAIN/sitemap.xml',

    host: 'YOUR-REAL-DOMAIN',
  };
}