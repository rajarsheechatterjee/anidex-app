import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import General from '../screens/general';
import General2 from '../screens/general2';
import General3 from '../screens/general3';
import General4 from '../screens/general4';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        labelStyle: { fontSize: 12, textTransform: 'none' },
        tabStyle: { minHeight: 10, maxHeight: 30, },
      }}>
      <Tab.Screen name="General" component={General}/>
      <Tab.Screen name="General3" component={General3}/>
      <Tab.Screen name="General4" component={General4}/>
      <Tab.Screen name="General2" component={General2}/>
    </Tab.Navigator>
  );
}

export default MyTabs;