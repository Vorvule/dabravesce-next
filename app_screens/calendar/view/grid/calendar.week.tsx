import { StyleSheet, View } from 'react-native';
import ThemedText from '@/components/ThemedText';
import { calendarData } from '@/app_screens/calendar/data/calendar.data';

export default function CalendarWeek() {
  return (
    <View style={styles.weekRow}>
      {calendarData.DAYS_BE.map((dayName) => (
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
