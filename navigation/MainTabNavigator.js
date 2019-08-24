import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AboScreen from '../screens/AboScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

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
  tabBarLabel: 'Entdecken',
  tabBarOptions: {
    activeTintColor: '#CC0033',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AboStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Transactions: TransactionsScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
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
      }/>
  ),
};

HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  AboStack,
});

tabNavigator.path = '';

export default tabNavigator;
