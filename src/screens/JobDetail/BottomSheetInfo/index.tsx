import React, { useCallback, useRef, useState } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  SCREEN_HEIGHT,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Palette, Spacing } from '@src/theme';
import { formatDisplayedPrice } from '@src/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import GraphicJob from '@components/GraphicJob';
import Swiper from '@components/Swiper';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import styles from './styles';
import Images from '@src/images';
import Button from '@components/Button';
import { JobType } from '@src/types';
import { format } from 'date-fns';

interface Props {
  onConfirm: () => void;
  animatedMapHeight: SharedValue<number>;
  data: JobType;
}

const SNAP_POINTS_SHEET = [
  0.2 * SCREEN_HEIGHT,
  0.55 * SCREEN_HEIGHT,
  0.9 * SCREEN_HEIGHT,
];
const SNAP_POINTS_SHEET_MODAL = [0.65 * SCREEN_HEIGHT];

const BottomSheetInfo: React.FC<Props> = ({
  onConfirm,
  animatedMapHeight,
  data,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const animatedPosition = useSharedValue(0);
  const { top } = useSafeAreaInsets();
  const { pickup, destination, price, date, vehicleId } = data;

  const jobDate = new Date(date);

  const renderHandleComponent = () => {
    return (
      <View style={styles.handleContainer}>
        <Text style={styles.id}>{format(jobDate, 'd')}</Text>
        <View style={styles.monthVehicleIdWrapper}>
          <Text style={styles.month}>{format(jobDate, 'MMMM')}</Text>
          <Text style={styles.jobId}>N95899</Text>
        </View>
        <Text style={styles.price}>
          {formatDisplayedPrice(price)}
        </Text>
      </View>
    );
  };

  // @ts-ignore
  const overlayHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedPosition.value,
      [0, 1],
      [0, 0.2 * SCREEN_HEIGHT],
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

  const onAnimate = useCallback((from: number, to: number) => {
    if (to === 2) {
      animatedPosition.value = withTiming(1);
    } else {
      if (to === 1) {
        animatedMapHeight.value = withTiming(SCREEN_HEIGHT * 0.9);
      } else {
        animatedMapHeight.value = withTiming(SCREEN_HEIGHT * 1.2);
      }
      animatedPosition.value = withTiming(0);
    }
  }, []);

  const onDismiss = () => {
    bottomSheetModalRef?.current?.dismiss();
    setIsLoading(false);
  };

  const renderModalBackdrop = (props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.4}
        onPress={onDismiss}
      />
    );
  };

  const onSwipeFinish = () => {
    setIsLoading(true);
    bottomSheetModalRef?.current?.present();
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={SNAP_POINTS_SHEET}
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
            <GraphicJob height={SCREEN_HEIGHT * 0.14} />
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
            <Text style={styles.date}>
              {format(jobDate, 'dd/MM/yyyy')}
            </Text>
          </View>
          <Swiper
            isLoading={isLoading}
            onFinishSwipe={onSwipeFinish}
          />
        </View>
      </BottomSheet>
      <Animated.View
        style={[overlayHeaderStyle, styles.headerOverlay]}>
        <SafeAreaView
          edges={['top']}
          style={styles.headerOverlayContent}>
          <Text style={styles.vehicleId}>{vehicleId}</Text>
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
          {isLoading && (
            <ActivityIndicator
              color={Palette.orange}
              style={[
                styles.loadingIndicator,
                {
                  top: top + Spacing.m,
                },
              ]}
            />
          )}
        </SafeAreaView>
      </Animated.View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        backdropComponent={renderModalBackdrop}
        handleComponent={null}
        snapPoints={SNAP_POINTS_SHEET_MODAL}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.btnCloseModal}
            onPress={onDismiss}>
            <Icon
              name="close"
              color={Palette.darkGrey}
              size={Spacing.l}
            />
          </TouchableOpacity>
          <Image
            source={Images.mapIllustration}
            style={styles.mapImage}
            resizeMode="contain"
          />
          <Text style={styles.modalTitle}>
            You have not arrived back at Expo
          </Text>
          <Text style={styles.modalDescription}>
            Please report back at Foyer 1 to complete the job
          </Text>
          <Button label="Ok" onPress={onConfirm} />
        </View>
      </BottomSheetModal>
    </>
  );
};

export default BottomSheetInfo;
