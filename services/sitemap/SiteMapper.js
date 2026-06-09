import appSources from '@/assets/albums/app.sources.js';

const createSitemap = () => {
  let urlSet = '';

  let path = '';
  urlSet += getUrlLoc(path);

  appSources.map((album) => {
    album.text.map((book) => {
      book.text.map((chapter) => {
        path = '/page/' + [album.slug, book.slug, chapter.slug].join('~');
        urlSet += getUrlLoc(path);
      });
    });
  });

  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urlSet +
    getUrlLoc('/calendar') +
    getUrlLoc('/search') +
  '</urlset>';

  console.log(sitemap);
};

const getUrlLoc = (path) => {
  return `<url><loc>https://dabravesce.by${path}</loc></url>\n`;
};

export default createSitemap;
