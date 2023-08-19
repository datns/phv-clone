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

const mock: JobType[] = [
  {
    id: '1',
    pickup: {
      name: 'Expo Hall 7',
      address: 'Expo Hall 7, Singapore',
      coordinates: {
        latitude: 10.7740739,
        longitude: 106.7010521,
      },
    },
    destination: {
      name: 'Far East Plaza',
      address:
        '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
      coordinates: {
        latitude: 10.7774368,
        longitude: 106.6995022,
      },
    },
    price: 65,
    estimatedMillisecond: 180000,
    vehicleId: 'LY-4b3dec',
    date: new Date().toString(),
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
      // @ts-ignore
      navigation.navigate('JobDetail', {
        data: item,
      });
    };
    return <CardJob data={item} onPress={onPress} />;
  };

  const keyExtractor = (item: JobType) => item.id;

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      data={mock}
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
