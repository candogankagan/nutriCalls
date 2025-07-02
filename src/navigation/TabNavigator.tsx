import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  useNavigationState,
} from '@react-navigation/native';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import MeetingsScreen from '../screens/Meetings/MeetingsScreen';
import CameraScreen from '../screens/Camera/CameraScreen';
import MealsScreen from '../screens/Meals/MealsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BottomTabBar from '../components/Core/BottomTabBar';

// Export the type for use in other components
export type TabStackParamList = {
  Dashboard: undefined;
  Meetings: undefined;
  Camera: undefined;
  Meals: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigationState = useNavigationState(state => state);

  // Get the current active route name
  const getActiveRouteName = (route: any): string => {
    if (!route) {
      return 'Dashboard';
    }

    const routeName = getFocusedRouteNameFromRoute(route) || 'Dashboard';
    return routeName;
  };

  // Get the active tab based on the current route
  const getActiveTab = ():
    | 'home'
    | 'meetings'
    | 'camera'
    | 'meals'
    | 'profile' => {
    if (!navigationState) {
      return 'home';
    }

    const route = navigationState.routes[navigationState.index];
    const routeName = getActiveRouteName(route);

    switch (routeName.toLowerCase()) {
      case 'dashboard':
        return 'home';
      case 'meetings':
        return 'meetings';
      case 'camera':
        return 'camera';
      case 'meals':
        return 'meals';
      case 'profile':
        return 'profile';
      default:
        return 'home';
    }
  };

  const activeTab = getActiveTab();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Meetings" component={MeetingsScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <BottomTabBar activeTab={activeTab} />
    </>
  );
};

export default TabNavigator;
