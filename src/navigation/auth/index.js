import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import Onboarding from '../../screens/auth';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding" headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      {/* <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Gps" component={Gps} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
