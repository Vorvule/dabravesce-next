import { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

import Colors from '@/constants/Colors';

import {
  tabBarIconStyle,
  tabBarItemStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from '@/constants/styles/tab.bar.styles';

class ScreenOptions {
  getScreenOptions(colorScheme: ColorSchemeName) {
    const colors = Colors[colorScheme ?? 'light'];

    return {
      tabBarActiveTintColor: colors.primary,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle,
      tabBarItemStyle,
      tabBarLabelStyle,
      tabBarIconStyle,
    };
  }
}

export const options = new ScreenOptions();
