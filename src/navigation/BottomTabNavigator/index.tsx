import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/Home';
import CoinScreen from '@screens/Coin';
import JobScreen from '@screens/Job';
import MenuScreen from '@screens/Menu';
import { SCREEN_NAME } from '@src/constants';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 8,
        },
      }}>
      <Tab.Screen
        name={SCREEN_NAME.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.COIN}
        component={CoinScreen}
        options={{
          tabBarLabel: 'Coin',
          tabBarIcon: ({ color }) => (
            <Icon name="logo-bitcoin" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.JOB}
        component={JobScreen}
        options={{
          tabBarLabel: 'Job',
          tabBarIcon: ({ color }) => (
            <Icon name="car" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.MENU}
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <Icon name="menu-outline" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
