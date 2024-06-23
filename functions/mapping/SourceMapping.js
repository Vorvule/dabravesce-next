import AppSources from "@/assets/albums/AppSources";

const mapSources = () => {
  let keychainMap = {};
  let slugchainMap = {};

  AppSources.map((album, albumIndex) => {
    album.text.map((book, bookIndex) => {
      book.text.map((chapter, chapterIndex) => {
        const keyArray = [albumIndex, bookIndex, chapterIndex];
        const keychain = [albumIndex, bookIndex, chapterIndex].join("~");
        const slugchain = [album.slug, book.slug, chapter.slug].join("~");

        keychainMap[keychain] = slugchain;
        slugchainMap[slugchain] = keyArray;
      });
    });
  });

  console.log(keychainMap);
  console.log(slugchainMap);
};

export default mapSources;