import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import List from '../screens/list';
import Details from '../screens/details';

const Stack = createStackNavigator();

function homeStack() {
  return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>

  );
}

export default homeStack;