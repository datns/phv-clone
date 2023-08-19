import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Palette, Spacing } from '@src/theme';
import { StyleSheet, View } from 'react-native';

interface Props {
  name: string;
  focused: boolean;
  hasBadge?: boolean;
}

const styles = StyleSheet.create({
  badge: {
    width: 12,
    aspectRatio: 1,
    borderRadius: 12 / 2,
    position: 'absolute',
    backgroundColor: Palette.red,
    top: 0,
    right: Spacing.xxl,
  },
});

const TabBarIcon: React.FC<Props> = ({ name, focused, hasBadge }) => {
  return (
    <>
      <Icon
        name={name}
        size={32}
        color={focused ? Palette.blue : Palette.timberwolf}
      />
      {hasBadge && <View style={styles.badge} />}
    </>
  );
};

export default TabBarIcon;
