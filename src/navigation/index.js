import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './auth';
// import Account from './account';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
