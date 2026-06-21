import { ScrollView } from 'react-native';

import MenuView from '@/applets/menu/menu.view';
import ThemedView from '@/components/themed/themed.view';
import ColumnHeader from './column.header';
import { useThemeColor } from '@/hooks/use.theme.color';

export default function LeftColumn() {
  const borderColor = useThemeColor({}, 'border');

  return (
    <ThemedView style={{ flex: 1, borderRightWidth: 1, borderRightColor: borderColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ColumnHeader title="Дабравесце" subtitle="Крыніцы" />

        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          <MenuView />
        </ThemedView>

      </ScrollView>
    </ThemedView>
  );
}
