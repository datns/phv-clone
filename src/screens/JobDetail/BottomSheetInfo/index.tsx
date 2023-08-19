import React, { useCallback, useRef, useState } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import { Dimensions, Image, Text, View } from 'react-native';
import { Palette, Spacing } from '@src/theme';
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
import styles from './styles';
import Images from '@src/images';
import Button from '@components/Button';

interface Props {
  onConfirm: () => void;
}

const HEIGHT = Dimensions.get('window').height;
const SNAP_POINTS_SHEET = [0.2 * HEIGHT, 0.55 * HEIGHT, 0.9 * HEIGHT];
const SNAP_POINTS_SHEET_MODAL = [0.6 * HEIGHT];

const BottomSheetInfo: React.FC<Props> = ({ onConfirm }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
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

  const onAnimate = useCallback((from: number, to: number) => {
    if (to === 2) {
      animatedPosition.value = withTiming(1);
    } else {
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
            onFinishSwipe={onSwipeFinish}
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