import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import BottomSheetInfo from '@screens/JobDetail/BottomSheetInfo';
import Icon from 'react-native-vector-icons/Ionicons';
import { Palette, Spacing } from '@src/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { MainStackParamList } from '@navigation/types';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -SCREEN_HEIGHT * 0.08,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Palette.white,
  },
  backButton: {
    width: Spacing.xxl,
    aspectRatio: 1,
    borderRadius: Spacing.xxl / 2,
    backgroundColor: Palette.white,
    position: 'absolute',
    left: Spacing.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const JobDetailScreen: React.FC = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const animatedMapHeight = useSharedValue(SCREEN_HEIGHT * 0.9);
  const {
    params: { data },
  } = useRoute<RouteProp<MainStackParamList, 'JobDetail'>>();

  const renderBackButton = () => {
    return (
      <TouchableOpacity
        style={[styles.backButton, { top: inset.top + Spacing.s }]}
        onPress={navigation.goBack}>
        <Icon name="chevron-back" size={Spacing.l} />
      </TouchableOpacity>
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedMapHeight.value,
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.map, animatedStyle]}>
          {Platform.OS === 'android' ? (
            // TODO: Dont have GG map key to enable map on Android
            <View />
          ) : (
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_DEFAULT}
              initialRegion={{
                latitude: 10.7740739,
                longitude: 106.7010521,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0121,
              }}>
              <Marker coordinate={data.pickup.coordinates} />
              <Marker coordinate={data.destination.coordinates} />
              <Polyline // TODO: Can you react-native-map-direction to draw route exactly when having gg map key
                coordinates={[
                  data.pickup.coordinates,
                  data.destination.coordinates,
                ]}
                strokeColor="#000"
                strokeColors={[Palette.lightBlue]}
                strokeWidth={Spacing.s}
                lineDashPattern={[100, 800]}
              />
            </MapView>
          )}
        </Animated.View>
        <BottomSheetInfo
          onConfirm={navigation.goBack}
          animatedMapHeight={animatedMapHeight}
          data={data}
        />
        {renderBackButton()}
      </View>
    </>
  );
};

export default JobDetailScreen;
