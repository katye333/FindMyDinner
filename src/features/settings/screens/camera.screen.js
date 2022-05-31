import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";


const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

export const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();

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

    return (
        <ProfileCamera
            ref={cam => cameraRef.current = cam}
            type={Camera.Constants.Type.front}>

        </ProfileCamera>
    )
};