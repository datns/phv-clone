import React, { useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetInfo from "@screens/JobDetail/BottomSheetInfo";
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
    backgroundColor: 'grey',
  },
});
const JobDetailScreen: React.FC = () => {
 ;
  return (
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
      <BottomSheetInfo />
    </View>
  );
};

export default JobDetailScreen;
