import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const MalWebview = ({ route }) => {
    const url = route.params.url;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}
        >
            <WebView
                source={{ uri: url }}
                style={{ flex: 1, marginTop: 45 }}
                startInLoadingState
                scalesPageToFit
                javaScriptEnabled
            />
        </View>
    );
};

export default MalWebview;
