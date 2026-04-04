import React from 'react';
import ThemedText from '@/components/ThemedText';
import { CALENDAR } from '@/assets/calendar/calendire';

export function CalendarSaints({ selectedDate }: any) {
  const date: keyof typeof CALENDAR = selectedDate.substring(5);
  const saints = `        ${CALENDAR[date]}`;

  return saints?.trim() ? <ThemedText>{saints}</ThemedText> : null;
}
