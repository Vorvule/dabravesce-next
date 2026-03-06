import React from 'react';

import ThemedText from '@/components/ThemedText';

import Styles from '@/constants/styles/common.styles';
import { calendarOutput } from '@/app_screens/calendar/model/calendar.output';

export default function CalendarDay({ event }: any) {
  const style = Styles.centered;
  // console.log('event', event);

  const feastNameText = event?.feastName ? event.feastName : null;
  const fastKindText = calendarOutput.getFastNameText(event?.fastKind);

  const fastLevelText = calendarOutput.getFastTypeText(event?.fastLevel);

  return (
    <>
      <ThemedText style={style}>{feastNameText}</ThemedText>
      {/*<ThemedText style={style}>{feastType}</ThemedText>*/}
      <ThemedText>{'\n'}</ThemedText>
      <ThemedText style={style}>{fastKindText}</ThemedText>
      <ThemedText style={style}>{fastLevelText}</ThemedText>
    </>
  );
}
