import { View, type ViewProps } from 'react-native';

import { ColorTheme } from '@/functions/ColorTheme';

export default function ThemedView({ style, ...otherProps }: ViewProps) {
  const backgroundColor = ColorTheme.getColor('background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
