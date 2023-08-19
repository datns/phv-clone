import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import BottomSheetInfo from '@screens/JobDetail/BottomSheetInfo';
import Icon from 'react-native-vector-icons/Ionicons';
import { Palette, Spacing } from '@src/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: '50%',
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
  const renderBackButton = () => {
    return (
      <TouchableOpacity
        style={[styles.backButton, { top: inset.top + Spacing.s }]}
        onPress={navigation.goBack}>
        <Icon name="chevron-back" size={Spacing.l} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_DEFAULT}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <BottomSheetInfo onConfirm={navigation.goBack} />
        {renderBackButton()}
      </View>
    </>
  );
};

export default JobDetailScreen;
