import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import MainStackNavigator from '@src/navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
