import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native';

import General from '../screens/general';
import Details from '../screens/stats';

const Tab = createMaterialTopTabNavigator();

function MyTabs({title}) {
  return (
    <ScrollView>

    <Tab.Navigator
    tabBarOptions={{
        labelStyle: { fontSize: 12, textTransform: 'none' },
        tabStyle: { minHeight: 10, maxHeight: 30, },
      }}>
      <Tab.Screen name="General">{() => <General title={title} />}</Tab.Screen>
      <Tab.Screen name="Details">{() => <Details title={title} />}</Tab.Screen>
    </Tab.Navigator>
    </ScrollView>

  );
}

export default MyTabs;