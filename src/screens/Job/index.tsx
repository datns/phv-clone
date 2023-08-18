import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import { Palette, Spacing, Typography } from '@src/theme';
import {
  NavigationState,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import Ongoing from '@screens/Job/TabCategory/Ongoing';
import Available from '@screens/Job/TabCategory/Available';
import History from '@screens/Job/TabCategory/History';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.white,
  },
  title: {
    color: Palette.darkBlue,
    ...Typography.headingBold,
    marginLeft: Spacing.m,
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: Spacing.l,
    marginBottom: Spacing.m,
  },
  tabBarItem: {
    borderRadius: Spacing.l,
    paddingHorizontal: Spacing.l,
    height: 40,
    justifyContent: 'center',
    backgroundColor: Palette.darkBlue,
    marginLeft: Spacing.m,
  },
  activeTabBarLabel: {
    color: Palette.white,
    ...Typography.bodyBold,
  },
  inactiveTabBarLabel: {
    color: Palette.darkGrey,
    ...Typography.body,
  },
  gradientView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.m,
  },
  btnFlash: {
    backgroundColor: Palette.white,
    width: Spacing.xxl,
    height: Spacing.xxl,
    borderRadius: Spacing.xxl / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Route {
  key: string;
  title: string;
}

export type SceneTab = SceneRendererProps & {
  route: Route;
};

const JobScreen: React.FC = () => {
  const bottomTabHeight = useBottomTabBarHeight();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState<number>(0);
  const [routes] = React.useState<Route[]>([
    { key: 'ongoing', title: 'Ongoing' },
    { key: 'available', title: 'Available' },
    { key: 'history', title: 'History' },
  ]);

  const gradientViewStyle = StyleSheet.flatten([
    styles.gradientView,
    {
      height: bottomTabHeight + 200,
      paddingBottom: bottomTabHeight + Spacing.l,
    },
  ]);

  const renderScene = ({ route }: SceneTab) => {
    switch (route.key) {
      case 'ongoing':
        return <Ongoing />;
      case 'available':
        return <Available />;
      case 'history':
        return <History />;
      default:
        return null;
    }
  };

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    },
  ) => (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route: Route, i: number) => {
        const focused = props.navigationState.index === i;
        const bgColor = focused
          ? Palette.darkBlue
          : Palette.lightGrey;
        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.tabBarItem, { backgroundColor: bgColor }]}
            onPress={() => props.jumpTo(route.key)}>
            <Text
              style={
                focused
                  ? styles.activeTabBarLabel
                  : styles.inactiveTabBarLabel
              }>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jobs</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <LinearGradient
        pointerEvents="box-none"
        colors={[Palette.transparent, Palette.black]}
        style={gradientViewStyle}>
        <TouchableOpacity style={styles.btnFlash}>
          <Icon
            name="flash"
            size={Spacing.l}
            color={Palette.orange}
          />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default JobScreen;
