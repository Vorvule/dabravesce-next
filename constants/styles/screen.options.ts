import Colors from '@/constants/Colors';
import { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {
  tabBarIconStyle,
  tabBarItemStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from '@/constants/styles/tab.bar.styles';

class ScreenOptions {
  getScreenOptions(colorScheme: ColorSchemeName) {
    return {
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
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
