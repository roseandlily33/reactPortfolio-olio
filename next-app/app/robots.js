export const dynamic = 'force-static';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: 'https://victoriabenoit-portfolio.onrender.com/sitemap.xml',

    host: 'https://victoriabenoit-portfolio.onrender.com',
  };
}