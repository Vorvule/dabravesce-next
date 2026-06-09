import { StyleSheet } from 'react-native';
import ThemedText from '@/components/themed/ThemedText';
import { DATE_NAMES } from '@/screens/calendar/data/date.names';
import ThemedView from '@/components/themed/ThemedView';

export default function CalendarWeek() {
  return (
    <ThemedView style={styles.weekRow}>
      {DATE_NAMES.DAYS_BE.map((dayName) => (
        <ThemedText type="item" key={dayName} style={styles.weekDay}>
          {dayName}
        </ThemedText>
      ))}
    </ThemedView>
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
