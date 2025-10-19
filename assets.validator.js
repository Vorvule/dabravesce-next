import AppSources from './assets/albums/AppSources.js';

AppSources.forEach((albums, i) => {
  // i === 0 && console.log('ALBUMS:\n', albums.text[0]);

  albums.text.forEach((album, j) => {
    // i === 0 && j === 0 && console.log('BOOKS:\n', album.text[0]);

    album.text.forEach((book, k) => {
      // i === 0 && j === 0 && k === 0 && console.log('CHAPTERS:\n', book.text[0]);

      book.text.forEach((chapter, l) => {
       if (chapter.includes('  ')) {
         console.log(album.slug, book.slug, chapter, chapter.indexOf('  '));
         return;
       }
      });
    });
  });
});
