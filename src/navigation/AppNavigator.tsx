import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NutritionistSelection from '../screens/NutritionistSelection/NutritionistSelection';
import PreCallPlan from '../screens/NutritionistSelection/PreCallPlan';
import AppointmentScheduling from '../screens/AppointmentScheduling/AppointmentScheduling';
import NutritionistLanding from '../screens/NutritionistSelection/NutritionistLanding';

export type HomeStackParamList = {
  Home: undefined;
  NutritionistSelection: undefined;
  NutritionistLanding: undefined;
  PreCallPlan: {nutritionist: any};
  AppointmentScheduling: {nutritionist: any};
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="NutritionistLanding"
        component={NutritionistLanding}
      />
      <HomeStack.Screen
        name="NutritionistSelection"
        component={NutritionistSelection}
      />
      <HomeStack.Screen name="PreCallPlan" component={PreCallPlan} />
      <HomeStack.Screen
        name="AppointmentScheduling"
        component={AppointmentScheduling}
      />
    </HomeStack.Navigator>
  );
}
