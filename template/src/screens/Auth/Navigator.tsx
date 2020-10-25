import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './SignIn';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'SignIn' }}
    />
  </Stack.Navigator>
);
