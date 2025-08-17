import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function ThemedView({ style, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({}, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
