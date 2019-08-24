import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AboScreen from '../screens/AboScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

<<<<<<< HEAD
FinanceStack.navigationOptions = {
  tabBarLabel: 'CO2',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
=======
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
>>>>>>> 0cb23888f2d191bd6b2e5225095181e70d0837ae
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={focused ? '../assets/images/active/home.svg' : '../assets/images/inactive/home.svg'}
    />
  ),
};

HomeStack.path = '';

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
  HomeStack,
  ExploreStack,
  AboStack,
  ProfilStack,
});

tabNavigator.path = '';

export default tabNavigator;
