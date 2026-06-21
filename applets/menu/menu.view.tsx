import { useState } from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';

import SearchView from './search/search.view';
import ThemedText from '../../components/themed/themed.text';
import MenuContent from './menu.content';

export default function MenuView() {
  const [showSearch, setShowSearch] = useState(false);

  const style = { paddingBottom: 24, textAlign: 'center' } as StyleProp<TextStyle>;
  const text = showSearch ? 'Крыніцы' : 'Пошук па змесце';

  return (
    <>
      <Pressable onPress={() => setShowSearch(!showSearch)}>
        <ThemedText type="link" style={style}>{text}</ThemedText>
      </Pressable>

      {showSearch ? <SearchView /> : <MenuContent /> }
    </>
  );
}
