import { JSX } from 'react';
import { Platform, TextInput } from 'react-native';

import searchStyles from './search.styles';
import { useColorScheme } from '@/hooks/use.color.scheme';
import { useThemeColor } from '@/hooks/use.theme.color';

import ThemedView from '@/components/themed/themed.view';

export default function SearchInput({
  searchText,
  setSearchText,
  placeholder = 'Пошук па змесце',
}: any): JSX.Element {
  const theme = useColorScheme() ?? 'dark';
  const textColor = useThemeColor({}, 'text');

  const colors = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    color: textColor,
  };

  return (
    <ThemedView>
      <TextInput
        autoFocus={Platform.OS === 'web'}
        value={searchText}
        onChangeText={setSearchText}
        placeholder={placeholder}
        placeholderTextColor="grey"
        cursorColor={textColor}
        style={[searchStyles.input, colors]}
      />
    </ThemedView>
  );
}