import { Dimensions, Platform } from 'react-native';

import { VERY_WIDE } from '@/constants/breakpoints';

export default class Device {
  static windowIsWide(): boolean {
    return this.getWindowWidth() > 800;
  }

  static windowIsVeryWide(): boolean {
    return this.getWindowWidth() > VERY_WIDE;
  }

  static getWindowWidth(): number {
    return (Platform.OS === 'web' && typeof window !== 'undefined')
      ? window.innerWidth
      : Dimensions.get('window').width;
  }
}
