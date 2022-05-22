import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 120px;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    border-color: red;
    border-width: 10px;
    width: 120px;
    height: 120px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, useImage }) => {
    let Image = isAndroid ? CompactWebView : CompactImage;
    
    // Fix for issues caused by using WebView component 
    // in places where this should use Image (Android bug)
    if(useImage === true) Image = CompactImage;
    else Image = CompactWebView;

    return (
        <Item>
            <Image source={{uri: restaurant.photos[0]}} />
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}