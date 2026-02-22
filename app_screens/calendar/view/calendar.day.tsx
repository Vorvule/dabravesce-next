import React from 'react';

import ThemedText from '@/components/ThemedText';
import { CalendarEvent } from '@/app_screens/calendar/types/calendar.types';

import Styles from '@/constants/styles/common.styles';
import { calendarTexts } from '@/app_screens/calendar/model/calendar.texts';

export default function CalendarDay({ date, calendar }: any) {
  const event: CalendarEvent = calendar[date];
  const style = Styles.centered;

  const feastName = event?.feastName ? event.feastName : null;
  const feastType = calendarTexts.getFeastNameText(event?.feastType);
  const fastName = calendarTexts.getFastNameText(event?.fastName);
  const fastType = calendarTexts.getFastTypeText(event?.fastType);

  return (
    <>
      <ThemedText style={style}>{feastName}</ThemedText>
      <ThemedText style={style}>{feastType}</ThemedText>
      <ThemedText style={style}>{fastName}</ThemedText>
      <ThemedText style={style}>{fastType}</ThemedText>
    </>
  );
}
