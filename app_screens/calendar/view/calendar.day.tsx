import React from 'react';
import { View } from 'react-native';

import { calendarOutput } from '@/app_screens/calendar/model/calendar.output';
import ThemedText from '@/components/ThemedText';
import Styles from '@/constants/styles/common.styles';

export default function CalendarDay({ event }: any) {
  const style = Styles.centered;
  // console.log('event', event);

  const fastKindText = calendarOutput.getFastNameText(event?.fastKind);
  const fastLevelText = calendarOutput.getFastTypeText(event?.fastLevel);

  return (
    <View style={Styles.padded}>
      {event?.feastName && <ThemedText style={style}>{event.feastName}</ThemedText>}

      <View style={Styles.padded}>
        <ThemedText style={style}>{fastKindText}</ThemedText>
        <ThemedText style={style}>{fastLevelText}</ThemedText>
      </View>
    </View>
  );
}
