import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './navigation/bottomTabs';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'pt-sans-bold': require('./assets/fonts/PTSansNarrow-Bold.ttf')
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
        <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}