import { JSX } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import searchStyles from './search.styles';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Device from '@/functions/Device';

export default function SearchInput({
  searchText,
  setSearchText,
  onPress,
}: any): JSX.Element {
  const theme = useColorScheme() ?? 'dark';
  const textColor = useThemeColor({}, 'text');

  const colors = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    color: textColor,
  };

  return (
    <View>
      <TextInput
        autoFocus={Device.platformIsWeb()}
        value={searchText}
        onChangeText={setSearchText}
        placeholder='Пошук па змесце'
        placeholderTextColor='grey'
        cursorColor={textColor}
        style={[searchStyles.input, colors]}
      />

      <Pressable style={searchStyles.button} onPress={onPress}>
        <MaterialIcons name='search' size={30} color='white' />
      </Pressable>
    </View>
  );
}
