import { Pressable } from 'react-native';

import ThemedText from './ThemedText';

import Styles from '../constants/styles/common.styles';

export default function ThemedOption({ type, children, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={Styles.border}>
      <ThemedText type={type} style={[Styles.padded, color]}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
