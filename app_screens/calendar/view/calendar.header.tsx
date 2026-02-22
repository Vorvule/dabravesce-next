import React from 'react';
import { StyleSheet } from 'react-native';

import RoundButton from '@/components/RoundButton';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { dateLogic } from '@/app_screens/calendar/logic/date.logic';

export default function CalendarHeader({ date, onPress }: any) {
  const dayMonth = dateLogic.getSelectedDayAndMonth(date);

  return (
    <ThemedView style={styles.row}>
      <ThemedText type='header'>{dayMonth}</ThemedText>
      <RoundButton name='calendar' onPress={onPress} enabled={true} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
