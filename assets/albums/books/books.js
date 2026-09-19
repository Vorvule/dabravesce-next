import lives from './texts/saints.lives.json' with { type: 'json' };
import paulowich from './texts/paulowich.json' with { type: 'json' };

const books = {
  slug: 'books',
  name: 'Кнігі',
  text: [lives, paulowich],
};

export default books;
