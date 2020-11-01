import React, { useRef } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { Appbar } from "react-native-paper";
import Colors from "../../theming/colors";

const MalWebview = ({ route, navigation }) => {
    const { url, title } = route.params;

    const webviewRef = useRef();

    return (
        <>
            <Appbar.Header style={{ backgroundColor: Colors.detailsHeader }}>
                <Appbar.Action
                    icon="close"
                    onPress={() => {
                        navigation.goBack();
                    }}
                    color={Colors.detailsHeaderText}
                    size={26}
                    style={{ marginRight: 0 }}
                />
                <Appbar.Content
                    title={title}
                    subtitle={url}
                    titleStyle={{ color: Colors.detailsHeaderText }}
                />
                <Appbar.Action
                    icon="arrow-left"
                    accessibilityLabel="Webview"
                    disabled
                />
                <Appbar.Action
                    icon="arrow-right"
                    accessibilityLabel="Webview"
                    disabled
                />
            </Appbar.Header>
            <View
                style={{
                    flex: 1,
                }}
            >
                <WebView
                    ref={webviewRef}
                    source={{ uri: url }}
                    startInLoadingState
                    scalesPageToFit
                    javaScriptEnabled
                />
            </View>
        </>
    );
};

export default MalWebview;
