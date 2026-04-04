import React from 'react';
import { Pressable } from 'react-native';

import ThemedText from '@/components/ThemedText';
import CellDot from '@/app_screens/calendar/view/cells/cell.dot';

export default function CalendarCell({ onPress, style, type, day, event }: any) {
  return (
    <Pressable onPress={onPress} style={style}>
      <ThemedText type={type}>{day}</ThemedText>
      <CellDot calendarEvent={event} />
    </Pressable>
  );
}
