import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from '@src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainStackNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
