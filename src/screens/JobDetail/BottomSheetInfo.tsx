import React, { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Palette, Spacing, Typography } from '@src/theme';
import { formatDisplayedPrice } from '@src/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import GraphicJob from '@components/GraphicJob';
import Swiper from '@components/Swiper';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: Spacing.l,
  },
  handleContainer: {
    backgroundColor: Palette.darkBlue,
    padding: Spacing.l,
    borderTopLeftRadius: Spacing.s,
    borderTopRightRadius: Spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    ...Typography.headingBold,
    color: Palette.white,
  },
  monthVehicleIdWrapper: {
    paddingHorizontal: Spacing.l,
    flexGrow: 1,
  },
  month: {
    color: Palette.white,
    ...Typography.subHeading,
    marginBottom: Spacing.xs,
  },
  jobId: {
    color: Palette.darkGrey,
    ...Typography.body,
  },
  price: {
    color: Palette.white,
    ...Typography.subHeading,
  },
  wrapperIcon: {
    width: Spacing.xxxl,
    aspectRatio: 1,
    backgroundColor: Palette.blue,
    borderRadius: Spacing.xxxl / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    flexDirection: 'row',
    marginBottom: Spacing.xl,
  },
  type: {
    color: Palette.blue,
    ...Typography.subHeadingBold,
    marginLeft: Spacing.l,
  },
  routeContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.m,
  },
  locationInfo: {
    marginLeft: Spacing.xl,
  },
  name: {
    ...Typography.subHeadingBold,
    color: Palette.black,
    marginBottom: Spacing.s,
  },
  address: {
    ...Typography.body,
    color: Palette.darkGrey,
    marginBottom: Spacing.s,
  },
  status: {
    ...Typography.statusBold,
    color: Palette.green,
  },
  completedTime: {
    marginTop: Spacing.xxxl * 2,
    color: Palette.blue,
    ...Typography.body,
    marginBottom: Spacing.m,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.xxl,
  },
  jobDate: {
    ...Typography.body,
    color: Palette.darkGrey,
  },
  date: {
    ...Typography.bodyBold,
    color: Palette.black,
  },
  headerOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -0.2 * HEIGHT,
    height: 0.2 * HEIGHT,
    backgroundColor: Palette.white,
  },
  headerOverlayContent: {
    alignItems: 'center',
    paddingVertical: Spacing.m,
    justifyContent: 'space-between',
    flex: 1,
  },
  vehicleId: {
    ...Typography.bodyBold,
    color: Palette.black,
  },
  priceHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceHeader: {
    ...Typography.heading,
    marginRight: Spacing.m,
  },
});

const BottomSheetInfo: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(
    () => [0.2 * HEIGHT, 0.55 * HEIGHT, 0.9 * HEIGHT],
    [],
  );

  const animatedPosition = useSharedValue(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const data = {
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
  };

  const { pickup, destination, price } = data;

  const renderHandleComponent = () => {
    return (
      <View style={styles.handleContainer}>
        <Text style={styles.id}>12</Text>
        <View style={styles.monthVehicleIdWrapper}>
          <Text style={styles.month}>December</Text>
          <Text style={styles.jobId}>N95899</Text>
        </View>
        <Text style={styles.price}>{formatDisplayedPrice(65)}</Text>
      </View>
    );
  };

  // @ts-ignore
  const overlayHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedPosition.value,
      [0, 1],
      [0, 0.205 * HEIGHT],
    );

    return {
      opacity: animatedPosition.value,
      transform: [
        {
          translateY,
        },
      ],
    };
  }, []);

  const onAnimate = useCallback((_: number, to: number) => {
    if (to === 2) {
      animatedPosition.value = withTiming(1);
    } else {
      animatedPosition.value = withTiming(0);
    }
  }, []);

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onAnimate={onAnimate}
        handleComponent={renderHandleComponent}>
        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <View style={styles.wrapperIcon}>
              <Icon
                name="shield-checkmark"
                size={Spacing.xl}
                color={Palette.white}
              />
            </View>
            <Text style={styles.type}>STANDARD RIDE</Text>
          </View>
          <View style={styles.routeContainer}>
            <GraphicJob height={Spacing.xxl * 4} />
            <View style={styles.locationInfo}>
              <Text style={styles.name}>{pickup.name}</Text>
              <Text style={styles.address}>{pickup.address}</Text>
              <Text style={styles.status}>Picked up</Text>
              <Text style={styles.completedTime}>6:06pm</Text>
              <Text style={styles.name}>{destination.name}</Text>
              <Text style={styles.address}>
                {destination.address}
              </Text>
              <Text style={styles.status}>Dropped-off</Text>
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.jobDate}>Job Date</Text>
            <Text style={styles.date}>12/12/2023</Text>
          </View>
          <Swiper
            isLoading={isLoading}
            onFinishSwipe={() => {
              setIsLoading(true);
            }}
          />
        </View>
      </BottomSheet>
      <Animated.View
        style={[overlayHeaderStyle, styles.headerOverlay]}>
        <SafeAreaView
          edges={['top']}
          style={styles.headerOverlayContent}>
          <Text style={styles.vehicleId}>LY-4b3dec</Text>
          <View style={styles.priceHeaderWrapper}>
            <Text style={styles.priceHeader}>
              {formatDisplayedPrice(price)}
            </Text>
            <Icon
              name="refresh"
              color={Palette.blue}
              size={Spacing.l}
            />
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default BottomSheetInfo;