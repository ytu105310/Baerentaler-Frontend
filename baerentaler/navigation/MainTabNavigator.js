import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboScreen from '../screens/AboScreen';
import ExploreScreen from '../screens/ExploreScreen';
import FinanceScreen from '../screens/FinanceScreen';
import ProfilScreen from '../screens/ProfilScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

HomeStack.path = '';

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
};

ExploreStack.path = '';

const AboStack = createStackNavigator(
  {
    Abo: AboScreen,
  },
  config
);

AboStack.navigationOptions = {
  tabBarLabel: 'Abo'
};

AboStack.path = '';

const FinanceStack = createStackNavigator(
  {
    Finance: FinanceScreen,
  },
  config
);

FinanceStack.navigationOptions = {
  tabBarLabel: 'Finance'
};

FinanceStack.path = '';

const ProfilStack = createStackNavigator(
  {
    Profil: ProfilScreen,
  },
  config
);

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil'
};

ProfilStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  AboStack,
  FinanceStack,
  ProfilStack
});

tabNavigator.path = '';

export default tabNavigator;
