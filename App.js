import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./src/navigation/bottomTabs";
import { StatusBar } from "react-native";

const getFonts = () =>
    Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-SemiBold.ttf"),
        "pt-sans-bold": require("./assets/fonts/PTSansNarrow-Bold.ttf"),
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <>
                {/* <StatusBar barStyle="light-content" /> */}
                <Navigator />
            </>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}
