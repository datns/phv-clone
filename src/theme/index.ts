import { StyleSheet } from 'react-native';
import { responsiveFont, responsiveSize } from '@src/utils';

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
  lightBlue: '#ACCBE1',
  red: '#E84855',
};

export const Typography = StyleSheet.create({
  status: {
    fontSize: responsiveFont(15),
    fontWeight: 'normal',
  },
  statusBold: {
    fontSize: responsiveFont(15),
    fontWeight: '600',
  },
  headingBold: {
    fontSize: responsiveFont(32),
    fontWeight: '600',
  },
  heading: {
    fontSize: responsiveFont(32),
  },
  subHeading: {
    fontSize: responsiveFont(20),
    fontWeight: 'normal',
  },
  subHeadingBold: {
    fontSize: responsiveFont(20),
    fontWeight: '600',
  },
  bodyBold: {
    fontSize: responsiveFont(18),
    fontWeight: '600',
  },
  body: {
    fontSize: responsiveFont(18),
    lineHeight: 24,
  },
});

export const Spacing = {
  xs: responsiveSize(4),
  s: responsiveSize(8),
  m: responsiveSize(16),
  l: responsiveSize(24),
  xl: responsiveSize(32),
  xxl: responsiveSize(40),
  xxxl: responsiveSize(56),
};
