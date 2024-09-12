// generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your URLs here
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);

// Define the sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

// Listen for errors in the write stream
writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});

// Pipe the stream to the file and handle errors
sitemap.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Sitemap successfully written to:', sitemapPath);
});

// Add URLs to the sitemap
urls.forEach((url) => {
  sitemap.write(url);
});

// Close the sitemap stream
sitemap.end();

writeStream.on('close', () => {
  console.log('Sitemap generation completed.');
});
