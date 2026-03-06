import { StyleSheet, View } from 'react-native';
import ThemedText from '@/components/ThemedText';
import { DATE_NAMES } from '@/app_screens/calendar/data/date.names';

export default function CalendarWeek() {
  return (
    <View style={styles.weekRow}>
      {DATE_NAMES.DAYS_BE.map((dayName) => (
        <ThemedText type='item' key={dayName} style={styles.weekDay}>
          {dayName}
        </ThemedText>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 18,
  },
});
