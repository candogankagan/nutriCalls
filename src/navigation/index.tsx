import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator';

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {user ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : ( */}
      <Stack.Screen name="Auth" component={AuthNavigator} />
      {/* )} */}
    </Stack.Navigator>
  );
}
