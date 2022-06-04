import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";

import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

const InnerSnap = styled.View`
    width: 100%;
    height: 100%;
    z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text>Permission for camera was denied by user.</Text>
    }

    // Use useCamer2Api for Android because otherwise 
    // aspect ratio is off on camera and resulting img
    return (
        <ProfileCamera
            useCamera2Api={Platform.OS === 'android' && true}
            ref={cam => cameraRef.current = cam}
            ratio={"16:9"}
            type={Camera.Constants.Type.front}>

            <TouchableOpacity onPress={snap}>
                <InnerSnap />
            </TouchableOpacity>
        </ProfileCamera>
    )
};