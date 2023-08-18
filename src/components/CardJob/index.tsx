import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Palette, Spacing, Typography } from '@src/theme';
import {
  convertEstimatedTime,
  formatDisplayedPrice,
} from '@src/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import { JobType } from '@src/types';

interface Props {
  data: JobType;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - Spacing.m * 2,
    alignSelf: 'center',
    backgroundColor: Palette.darkBlue,
    borderRadius: Spacing.xs,
    padding: Spacing.l,
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    ...Typography.bodyBold,
    color: Palette.white,
  },
  price: {
    color: Palette.white,
    ...Typography.body,
    textAlign: 'right',
    marginBottom: Spacing.xs,
  },
  estimationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.l,
    alignSelf: 'flex-end',
  },
  estimatedTime: {
    color: Palette.darkGrey,
    ...Typography.status,
  },
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  address: {
    color: Palette.darkGrey,
    ...Typography.status,
    flex: 1,
  },
  verticalLine: {
    backgroundColor: Palette.blue,
    height: Spacing.l,
    width: 2,
    borderRadius: Spacing.s,
    marginVertical: Spacing.s,
    marginLeft: Spacing.m / 2 - 1,
  },
  destinationIcon: {
    width: Spacing.m,
    height: Spacing.m,
    borderRadius: Spacing.m / 2,
    backgroundColor: Palette.blue,
    marginRight: Spacing.s,
    alignSelf: 'baseline',
    marginTop: Spacing.xs,
  },
});
const CardJob: React.FC<Props> = ({ data, onPress }) => {
  const { pickup, destination } = data;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.namePriceContainer}>
        <Text style={styles.name}>{data.pickup.name}</Text>
        <Text style={styles.price}>
          {formatDisplayedPrice(data.price)}
        </Text>
      </View>
      <View style={styles.estimationWrapper}>
        <Icon
          name="time-outline"
          color={Palette.darkGrey}
          size={Spacing.m}
        />
        <Text style={styles.estimatedTime}>
          {convertEstimatedTime(data.estimatedMillisecond)}
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Icon
          name={'walk'}
          color={Palette.blue}
          size={Spacing.m}
          style={{ marginRight: Spacing.s }}
        />
        <Text style={styles.name}>
          {pickup.name}
          <Text style={styles.address}>{` - ${pickup.address}`}</Text>
        </Text>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.locationContainer}>
        <View style={styles.destinationIcon} />
        <Text style={styles.name}>
          {destination.name}
          <Text
            style={
              styles.address
            }>{` - ${destination.address}`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CardJob);
