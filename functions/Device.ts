import { Dimensions, Platform } from 'react-native';

export default class Device {
  static windowIsWide(): boolean {
    return this.getWindowWidth() > 800;
  }

  static getWindowWidth(): number {
    return (Platform.OS === 'web' && typeof window !== 'undefined')
      ? window.innerWidth
      : Dimensions.get('window').width;
  }
}
