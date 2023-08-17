import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import CoinScreen from '@screens/Coin';
import JobScreen from '@screens/Job';
import MenuScreen from '@screens/Menu';
import { SCREEN_NAME } from '@src/constants';
import TabBarIcon from '@navigation/BottomTabNavigator/TabBarIcon';
import { Palette, Spacing, Typography } from '@src/theme';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          paddingTop: Spacing.s,
          height: 84,
        },
        tabBarActiveTintColor: Palette.blue,
        tabBarLabelStyle: Typography.status,
        tabBarInactiveTintColor: Palette.timberwolf,
      }}>
      <Tab.Screen
        name={SCREEN_NAME.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home-outline" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.COIN}
        component={CoinScreen}
        options={{
          tabBarLabel: 'Coin',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="logo-bitcoin" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.JOB}
        component={JobScreen}
        options={{
          tabBarLabel: 'Job',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="car" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.MENU}
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="menu-outline" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
