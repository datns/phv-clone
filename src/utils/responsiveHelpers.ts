import { Dimensions, PixelRatio, Platform } from 'react-native';
const STANDARD_WINDOW = { width: 375, height: 667 };

export function responsiveFont(size: number): number {
  const newSize =
    (size * Dimensions.get('window').width) / STANDARD_WINDOW.width;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
}

export function responsiveSize(size: number): number {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('window').width / STANDARD_WINDOW.width) * size,
  );
}
