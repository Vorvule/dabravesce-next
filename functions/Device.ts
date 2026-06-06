import { Dimensions, Platform } from 'react-native';

export default class Device {
  static windowIsWide(): boolean {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      return window.innerWidth > 800;
    }
    return this.getWindowWidth() > 800;
  }

  static getWindowWidth(): number {
    return Dimensions.get('window').width;
  }
}
