import { useContext } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Link } from 'expo-router';

import ThemedText from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

import { GlobalContext } from '@/contexts/GlobalContext';
import Page from '@/functions/Page';

export default function DailyGospel() {
  const { dailyKeychain } = useContext(GlobalContext);

  const linkStyle: StyleProp<TextStyle> = {
    marginTop: 100,
    marginBottom: 100,
    textAlign: 'center',
  };

  const textStyle: StyleProp<TextStyle> = {
    color: useThemeColor({}, 'link'),
  };

  return (
    <Link style={linkStyle} href={Page.getUrl(dailyKeychain)}>
      <ThemedText type='link' style={textStyle}>
        Евангелле дня
      </ThemedText>
    </Link>
  );
}
