import React from 'react';

import { calendarOutput } from '@/app_screens/calendar/model/calendar.output';
import ThemedText from '@/components/ThemedText';
import Styles from '@/constants/styles/common.styles';
import ThemedView from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function CalendarDay({ event }: any) {
  const style = Styles.centered;

  const feastNameColor = event?.feastType === 'Easter' ? 'crimson' : 'orangered';
  const feastNameStyle = feastNameColor ? { ...style, color: feastNameColor } : style

  const fastKindText = calendarOutput.getFastNameText(event?.fastKind);
  const fastLevelText = calendarOutput.getFastTypeText(event?.fastLevel);

  const fastColor = useThemeColor({light: 'darkviolet', dark: 'orange'}, 'text')
  const fastStyle =  { ...style, color: fastColor }

  return (
    <ThemedView style={Styles.padded}>
      {event?.feastName &&
        <ThemedText type="header" style={feastNameStyle}>
          {event.feastName}
        </ThemedText>}

      <ThemedView style={Styles.padded}>
        <ThemedText type='item' style={fastStyle}>{fastKindText}</ThemedText>
        <ThemedText type='item' style={fastStyle}>{fastLevelText}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
