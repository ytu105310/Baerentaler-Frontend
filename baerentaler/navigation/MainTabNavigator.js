import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AboScreen from '../screens/AboScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProductScreen from '../screens/ProductScreen';
import FinanceScreen from '../screens/FinanceScreen';
import ProfilScreen from '../screens/ProfilScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    Product: ProductScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ExploreStack.path = '';

const AboStack = createStackNavigator(
  {
    Abo: AboScreen,
  },
  config
);

AboStack.navigationOptions = {
  tabBarLabel: 'Abo',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

AboStack.path = '';

const FinanceStack = createStackNavigator(
  {
    Finance: FinanceScreen,
  },
  config
);

FinanceStack.navigationOptions = {
  tabBarLabel: 'CO2',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused ? '../assets/images/active/home.svg' : '../assets/images/inactive/home.svg'}
    />
  ),
};

FinanceStack.path = '';

const ProfilStack = createStackNavigator(
  {
    Profil: ProfilScreen,
  },
  config
);

ProfilStack.navigationOptions = {
  tabBarLabel: 'Händler',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      color={'#CC0033'}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ProfilStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ExploreStack,
  AboStack,
  FinanceStack,
  ProfilStack,
});

tabNavigator.path = '';

export default tabNavigator;
