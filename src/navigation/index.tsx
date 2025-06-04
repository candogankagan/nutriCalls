import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '../store/rootReducer';
import AuthNavigator from './AuthNavigator';
import TabNavigator, {TabStackParamList} from './TabNavigator';

export type RootStackParamList = {
  Auth: undefined;
  Main: {
    screen?: keyof TabStackParamList;
    params?: TabStackParamList[keyof TabStackParamList];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isLoggedIn,
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
