import { View } from 'react-native';

import { useThemeColor } from '@/hooks/use.theme.color';

export default function ThemedView({ style, ...otherProps }: any ) {
  const backgroundColor = useThemeColor({}, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
