import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../routes/homeStack';
import ListStack from '../routes/listStack';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="List" component={ListStack} />
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}

export default BottomTabsNavigator;