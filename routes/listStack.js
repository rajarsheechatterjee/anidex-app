import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import List from '../screens/list';
import Details from '../screens/details';

const Stack = createStackNavigator();

function listStack() {
  return (
        <Stack.Navigator>
          <Stack.Screen name="StroheimRequiem's List" component={List} />
        </Stack.Navigator>

  );
}

export default listStack;