import React from 'react';
import { StyleSheet, View } from 'react-native';

import ThemedText from '@/components/ThemedText';
import RoundButton from '@/components/RoundButton';
import { calendarLogic } from '@/app_screens/calendar/model/calendar.logic';

export default function CalendarNavigation({ grid, setDate }: any) {
  const gridMonth = calendarLogic.getMonthName(grid.month);

  const decreaseMonth = () => setDate(new Date(grid.year, grid.month - 1, 1));
  const increaseMonth = () => setDate(new Date(grid.year, grid.month + 1, 1));

  return (
    <View style={styles.navigation}>
      <RoundButton name='arrow-back' onPress={decreaseMonth} enabled={true} />
      <ThemedText type='item'>{`${gridMonth} ${grid.year}`}</ThemedText>
      <RoundButton name='arrow-forward' onPress={increaseMonth} enabled={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
