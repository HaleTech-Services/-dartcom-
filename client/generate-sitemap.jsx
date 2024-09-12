// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your URLs here
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 }
];

const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);
const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

streamToPromise(sitemap.pipe(writeStream))
  .then(() => console.log('Sitemap successfully generated!'))
  .catch((error) => console.error('Error creating sitemap:', error));

// Add URLs to the sitemap
urls.forEach((url) => {
  sitemap.write(url);
});

sitemap.end();
