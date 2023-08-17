import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Palette } from '@src/theme';

interface Props {
  name: string;
  focused: boolean;
}
const TabBarIcon: React.FC<Props> = ({ name, focused }) => {
  return (
    <Icon
      name={name}
      size={32}
      color={focused ? Palette.blue : Palette.timberwolf}
    />
  );
};

export default TabBarIcon;
