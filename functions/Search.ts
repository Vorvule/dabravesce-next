import AppSourcesSearchable from '@/assets/albums/AppSourcesSearchable';

export type SearchResult = {
  nameChain: string;
  slugChain: string;
};

class Search {
  public getInSources(searchText: string): SearchResult[] {
    searchText = searchText.trim().replace(/\s+/g, ' ').toLowerCase();

    if (searchText === '') {
      return [];
    }

    let itemFound = false;
    const searchResults: SearchResult[] = [];

    AppSourcesSearchable.forEach((source) => {
      source.text.forEach((album) => {
        album.text.forEach((book) => {
          itemFound = false;
          book.text.forEach((chapter) => {
            if (typeof chapter !== 'string' || itemFound) {
              return;
            }

            const chapterText = chapter.toLowerCase();

            if (chapterText.includes(searchText)) {
              const bookName = book.name.split(' | ')[0];

              const searchResult: SearchResult = {
                nameChain: `${source.name} ~ ${album.name} ~ ${bookName}`,
                slugChain: `${source.slug}~${album.slug}~${book.slug}`,
              };

              searchResults.push(searchResult);
              itemFound = true;
            }
          });
        });
      });
    });

    return searchResults;
  }
}

export default new Search();
