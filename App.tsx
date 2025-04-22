import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import ReduxProvider from './src/store/reduxProvider';

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
}
