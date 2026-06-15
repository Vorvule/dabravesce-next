import React from 'react';
import { Pressable } from 'react-native';

import ThemedText from '@/components/themed/themed.text';
import CellDot from '@/applets/calendar/view/cells/cell.dot';

export default function CalendarCell({ onPress, style, type, day, event }: any) {
  return (
    <Pressable onPress={onPress} style={style}>
      <ThemedText type={type}>{day}</ThemedText>
      <CellDot calendarEvent={event} />
    </Pressable>
  );
}
