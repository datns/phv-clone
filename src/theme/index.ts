import { StyleSheet } from 'react-native';

export const Palette = {
  white: '#FFFFFF',
  black: '#000000',
  darkBlue: '#011023',
  blue: '#1789FC',
  timberwolf: '#D1D1D1',
  transparent: 'transparent',
  lightGrey: '#F5F5F5',
  darkGrey: '#B0B2B8',
  orange: '#F28123',
};

export const Typography = StyleSheet.create({
  status: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
  },
  bodyBold: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 18,
  },
});

export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 36,
  xxl: 48,
};
