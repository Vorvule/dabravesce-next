import React from 'react';
import { StyleSheet } from 'react-native';
import ThemedText from '@/components/ThemedText';
import CALENDAR from '@/assets/calendar/calendire.json';
import ThemedView from '@/components/ThemedView';

type CalendarSaintsProps = {
  selectedDate: string;
};

type CalendarType = {
  [month: string]: {
    [day: string]: string[];
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});

export function CalendarSaints({ selectedDate }: CalendarSaintsProps) {
  // selectedDate мае фармат 'YYYY-MM-DD'
  const month = selectedDate.substring(5, 7); // 'MM'
  const day = selectedDate.substring(8, 10); // 'DD'

  const typedCalendar = CALENDAR as CalendarType;
  const saints = typedCalendar[month]?.[day] || [];

  if (!saints.length) return null;

  return (
    <ThemedView style={styles.container}>
      {saints.map((saint, index) => {
        return (<ThemedText key={`saint-${index}`}>{` ⏺ ︎  ${saint}`}</ThemedText> );
      })}
    </ThemedView>
  );
}
