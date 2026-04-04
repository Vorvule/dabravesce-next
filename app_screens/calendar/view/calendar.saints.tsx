import React from 'react';
import ThemedText from '@/components/ThemedText';
import CALENDAR from '@/assets/calendar/calendire.json';

export function CalendarSaints({ selectedDate }: any) {
  // selectedDate мае фармат 'YYYY-MM-DD'
  const month = selectedDate.substring(5, 7); // 'MM'
  const day = selectedDate.substring(8, 10); // 'DD'

  const typedCalendar: any = CALENDAR;
  const saints = typedCalendar[month]?.[day] || '';

  if (!saints) return null;

  return saints.map((saint: any, index: any) => {
   return (<ThemedText key={`saint-${index}`}>{` ⏺ ︎  ${saint}`}</ThemedText> );
  })
}
