import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { clamp } from '@src/utils';
import { Palette, Spacing, Typography } from '@src/theme';

interface SwiperProps {
  isLoading: boolean;
  onFinishSwipe: () => void;
}

const SWIPER_WIDTH = Dimensions.get('window').width - 2 * Spacing.m;
const SWIPER_HEIGHT = 64;
const PADDING = Spacing.xs;
const INDICATOR_SIZE = SWIPER_HEIGHT - PADDING * 2;
const SWIPE_RANGE = SWIPER_WIDTH - PADDING * 2 - INDICATOR_SIZE;

const styles = StyleSheet.create({
  swiperContainer: {
    width: SWIPER_WIDTH,
    height: SWIPER_HEIGHT,
    borderRadius: 999,
    flexDirection: 'row',
    backgroundColor: Palette.blue,
    padding: PADDING,
  },
  circle: {
    alignSelf: 'center',
    width: INDICATOR_SIZE,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: Palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    ...Typography.bodyBold,
    color: Palette.white,
  },
});

const Swiper = ({ isLoading, onFinishSwipe }: SwiperProps) => {
  const translateX = useSharedValue(0);

  React.useEffect(() => {
    if (!isLoading) {
      translateX.value = withTiming(0);
    }
  }, [isLoading]);

  // @ts-ignore
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_e, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = clamp(translationX + ctx.x, 0, SWIPE_RANGE);
    },
    onEnd: () => {
      if (translateX.value < SWIPE_RANGE) {
        translateX.value = withTiming(0);
      } else {
        runOnJS(onFinishSwipe)();
      }
    },
  });

  return (
    <View style={styles.swiperContainer}>
      <View style={styles.label}>
        <Text style={styles.completed}>Completed</Text>
      </View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[animatedStyle, styles.circle]}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Icon name="gesture-swipe" size={Spacing.l} color={Palette.black} />
          )}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
export default Swiper;
