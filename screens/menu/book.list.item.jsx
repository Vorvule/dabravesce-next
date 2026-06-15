import { useContext, useEffect, useState } from 'react';

import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedOption from '@/components/themed/themed.option';

import ChapterList from './chapter.list.jsx';
import Menu from '@/services/menu';
import { GlobalContext } from '@/contexts/global.context';

export default function BookListItem({ book, keys, folding }) {
  const [firstRun, setFirstRun] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  const linkColor = useThemeColor({}, 'link');
  const { keychain } = useContext(GlobalContext);
  const color = Menu.getColor(keychain, keys, linkColor);

  useEffect(() => {
    if (firstRun) return;
    setExpanded(equal(unfolded, keys));
  }, [firstRun, keys, unfolded]);

  const onPress = () => {
    firstRun && setFirstRun(false);

    if (equal(unfolded, keys)) {
      setExpanded(!expanded);
    } else {
      setUnfolded(keys);
    }
  };

  return (
    <>
      <ThemedOption type="item" onPress={onPress} color={color}>
        {book.name}
      </ThemedOption>

      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}

const equal = (unfolded, keys) => {
  return unfolded[0] === keys[0] && unfolded[1] === keys[1];
};
