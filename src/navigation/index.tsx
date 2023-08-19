import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import JobDetailScreen from '@screens/JobDetail';
import { MainStackParamList } from '@navigation/types';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'BottomTab'}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={'JobDetail'} component={JobDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
