import { Pressable } from 'react-native';

import Styles from '../constants/styles/common.styles';
import ThemedText from './ThemedText';

export default function ThemedOption({ type, children, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={Styles.border}>
      <ThemedText type={type} style={[Styles.padded, color]}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
