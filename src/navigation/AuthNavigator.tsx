import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import NutritionistSelection from '../screens/NutritionistSelection/NutritionistSelection';
import PreCallPlan from '../screens/NutritionistSelection/PreCallPlan';
import AppointmentScheduling from '../screens/AppointmentScheduling/AppointmentScheduling';
import NutritionistLanding from '../screens/NutritionistSelection/NutritionistLanding';
import TimeSlotSelection from '../screens/AppointmentScheduling/TimeSlotSelection';
import AppointmentConfirmation from '../screens/AppointmentScheduling/AppointmentConfirmation';

export type AuthStackParamList = {
  OnBoarding: undefined;
  Landing: undefined;
  Welcome: undefined;
  SignUp: {referrerEmail?: string};
  Login: undefined;
  Survey: undefined;
  NutritionistSelection: undefined;
  PreCallPlan: {nutritionist: any};
  AppointmentScheduling: {nutritionist: any};

  NutritionistLanding: undefined;
  TimeSlotSelection: {selectedDates: number[]; nutritionist: any};
  AppointmentConfirmation: {
    selectedDates: number[];
    selectedTimeSlots: any;
    nutritionist: any;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  console.log('AuthNavigator');

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="NutritionistLanding"
        component={NutritionistLanding}
      />
      <Stack.Screen
        name="NutritionistSelection"
        component={NutritionistSelection}
      />
      <Stack.Screen name="PreCallPlan" component={PreCallPlan} />
      <Stack.Screen
        name="AppointmentScheduling"
        component={AppointmentScheduling}
      />
      <Stack.Screen name="TimeSlotSelection" component={TimeSlotSelection} />
      <Stack.Screen
        name="AppointmentConfirmation"
        component={AppointmentConfirmation}
      />
    </Stack.Navigator>
  );
}
