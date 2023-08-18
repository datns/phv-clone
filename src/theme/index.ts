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
  green: '#3EC300',
};

export const Typography = StyleSheet.create({
  status: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  statusBold: {
    fontSize: 15,
    fontWeight: '600',
  },
  headingBold: {
    fontSize: 32,
    fontWeight: '600',
  },
  heading: {
    fontSize: 32,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  subHeadingBold: {
    fontSize: 20,
    fontWeight: '600',
  },
  bodyBold: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 56,
};
