// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Recom from '../screens/recommendations';
// import Details from '../screens/details';

// const Stack = createStackNavigator();

// function recomStack({title, navigation}) {
//   return (
//         <Stack.Navigator>
//           <Stack.Screen name="Recom">{() => <Recom title={title} navigation={navigation} />}</Stack.Screen>
//           <Stack.Screen 
//             name="Details" 
//             component={Details} 
//             options={
//               ({ route }) => ({ title: route.params.title })}
//           />
//         </Stack.Navigator>

//   );
// }

// export default recomStack;