import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import { SCREEN_NAME } from '@src/constants';
import JobDetailScreen from '@screens/JobDetail';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREEN_NAME.BOTTOM_TAB}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name={SCREEN_NAME.JOB_DETAIL}
        component={JobDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
