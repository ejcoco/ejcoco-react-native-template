import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Detail from './Detail';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Detail" component={Detail} />
  </Tab.Navigator>
);
