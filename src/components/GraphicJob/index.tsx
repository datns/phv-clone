import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Palette, Spacing } from '@src/theme';

interface Props {
  height: number;
}

const styles = StyleSheet.create({
  verticalLine: {
    width: 2,
    borderRadius: Spacing.xs,
    backgroundColor: Palette.blue,
    marginLeft: Spacing.m / 2 - 1,
    marginVertical: Spacing.s,
  },
  circle: {
    width: Spacing.m,
    aspectRatio: 1,
    borderRadius: Spacing.m / 2,
    backgroundColor: Palette.blue,
  },
});

const GraphicJob: React.FC<Props> = ({ height }) => {
  return (
    <View>
      <Icon name="walk" size={Spacing.l} color={Palette.blue} />
      <View style={[styles.verticalLine, { height }]} />
      <View style={styles.circle} />
    </View>
  );
};

export default GraphicJob;
