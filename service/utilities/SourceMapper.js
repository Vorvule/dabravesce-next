import AppSources from "@/assets/albums/AppSources";

export default function mapSources() {
  let sourceMap = {};

  AppSources.map((album, albumIndex) => {
    album.text.map((book, bookIndex) => {
      book.text.map((chapter, chapterIndex) => {
        const url = [album.slug, book.slug, chapter.slug].join("~");

        sourceMap[url] = [albumIndex, bookIndex, chapterIndex];
      });
    });
  });

  console.log(sourceMap);
}
