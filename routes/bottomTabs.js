import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../routes/homeStack';
import ListStack from '../routes/listStack';
import SearchStack from '../routes/searchStack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
              tabBarLabel: 'Top Anime',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen name="Search" component={SearchStack} 
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen name="List" component={ListStack} 
            options={{
              tabBarLabel: 'Anime List',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
              ),
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    
  );
}

export default BottomTabsNavigator;