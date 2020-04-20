import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './screen/initialscreen';

export default function Routes() {
  return (
    <NavigationContainer screenOption={{ headerShow: false }}>
      <AppStack.Navigator>
        <AppStack.screen name="home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
