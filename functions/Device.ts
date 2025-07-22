import { Dimensions, Platform } from 'react-native';

export default class Device {
  static platformIsWeb(): boolean {
    return Platform.OS === 'web';
  }

  static windowIsWide(): boolean {
    return this.getWindowWidth() > 800;
  }

  static getWindowWidth(): number {
    return Dimensions.get('window').width;
  }
}
