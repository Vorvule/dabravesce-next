import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ColorTheme } from '@/functions/ColorTheme';

export default function RoundButton({ name, onPress, enabled }) {
  const iconColor = ColorTheme.getIconColor(enabled);

  const styles = StyleSheet.create({
    button: {
      height: 50,
      width: 50,
      margin: 14,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: iconColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={24} color={iconColor} style={{}} />
    </Pressable>
  );
}
