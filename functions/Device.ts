import { Dimensions, Platform } from 'react-native';

export default class Device {
  static windowIsWide(): boolean {
    return this.getWindowWidth() > 800;
  }

  static windowIsVeryWide(): boolean {
    return this.getWindowWidth() >= 1720;
  }

  static getWindowWidth(): number {
    return (Platform.OS === 'web' && typeof window !== 'undefined')
      ? window.innerWidth
      : Dimensions.get('window').width;
  }
}
