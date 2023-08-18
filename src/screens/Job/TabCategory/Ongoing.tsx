import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import CardJob from '@components/CardJob';
import { JobType } from '@src/types';
import { Spacing } from '@src/theme';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '@src/constants';

const mock: JobType[] = [
  {
    id: '1',
    pickup: {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
    },
    destination: {
      name: 'Far East Plaza',
      address:
        '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
    },
    price: 65,
    estimatedMillisecond: 180000,
  },
  {
    id: '2',
    pickup: {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
    },
    destination: {
      name: 'Far East Plaza',
      address:
        '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
    },
    price: 65,
    estimatedMillisecond: 180000,
  },
  {
    id: '3',
    pickup: {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
    },
    destination: {
      name: 'Far East Plaza',
      address:
        '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
    },
    price: 65,
    estimatedMillisecond: 180000,
  },
  {
    id: '4',
    pickup: {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
    },
    destination: {
      name: 'Far East Plaza',
      address:
        '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
    },
    price: 65,
    estimatedMillisecond: 180000,
  },
];

const styles = StyleSheet.create({
  separator: {
    height: Spacing.m,
    width: '100%',
  },
  contentContainer: {
    paddingTop: Spacing.l,
  },
});

const Ongoing: React.FC = () => {
  const bottomHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const renderItem: ListRenderItem<JobType> = ({ item }) => {
    const onPress = () => {
      navigation.navigate(SCREEN_NAME.JOB_DETAIL);
    };
    return <CardJob data={item} onPress={onPress} />;
  };

  const keyExtractor = (item: JobType) => item.id;

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      data={mock.slice(0, 1)}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={[
        styles.contentContainer,
        {
          paddingBottom: bottomHeight,
        },
      ]}
    />
  );
};

export default Ongoing;
