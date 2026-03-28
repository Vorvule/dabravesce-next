import React from 'react';
import { StyleSheet } from 'react-native';

import { cellDots } from '@/app_screens/calendar/view/cells/cell.dots';
import { CalendarEvent } from '@/app_screens/calendar/types/calendar.types';
import ThemedView from '@/components/ThemedView';

export default function CellDot({ calendarEvent }: { calendarEvent: CalendarEvent }) {
  if (!calendarEvent) return;

  const style = [styles.dot, cellDots.getDotColor(calendarEvent)];

  return <ThemedView style={style} />;
}

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 2,
  },
});
