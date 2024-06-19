import AppSources from "@/assets/albums/AppSources";

const mapSources = () => {
  let keychainMap = {};
  let slugMap = {};

  AppSources.map((album, albumIndex) => {
    album.text.map((book, bookIndex) => {
      book.text.map((chapter, chapterIndex) => {
        const keychain = [albumIndex, bookIndex, chapterIndex].join("~");
        const url = [album.slug, book.slug, chapter.slug].join("~");

        keychainMap[keychain] = url;
        slugMap[url] = keychain;
      });
    });
  });

  console.log(keychainMap);
  console.log(slugMap);
};

export default mapSources;