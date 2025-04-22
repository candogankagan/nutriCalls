import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';

export type AuthStackParamList = {
  OnBoarding: undefined;
  SignUp: {referrerEmail?: string};
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
}
