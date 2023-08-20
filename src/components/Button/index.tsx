import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Palette, Spacing, Typography } from '@src/theme';

interface Props {
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: Spacing.xs,
    backgroundColor: Palette.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.m,
  },
  label: {
    ...Typography.subHeadingBold,
    color: Palette.white,
  },
});
const Button: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
