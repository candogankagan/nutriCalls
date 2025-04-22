import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export type AppTabParamList = {
  HomeTab: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{title: 'Ana Sayfa'}}
      />
    </Tab.Navigator>
  );
}
