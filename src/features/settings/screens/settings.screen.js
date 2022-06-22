import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
    source: require('../../../../assets/home_bg.jpg')
})`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const TransparentSafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
    background-color: rgba(255,255,255,0.4)
`;
const AvatarContainer = styled.View`
    align-items: center;
`;
export const SettingsScreen = ({ navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    }; 

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SettingsBackground>
            <TransparentSafeArea>
                <AvatarContainer>
                    <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                        {
                            !photo &&
                            <Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.primary} />
                        }
                        {
                            photo &&
                            <Avatar.Image size={180} source={{uri: photo}} backgroundColor="#2182BD" />
                        }
                    </TouchableOpacity>

                    <Spacer position={"top"} size={"large"}>
                        <Text variant="label">{user.email}</Text>
                    </Spacer>
                </AvatarContainer>
                <Spacer position={"top"} size={"large"} />
                <List.Section>
                    <SettingsItem
                        title="View Your Favorites"
                        left={(props) => <List.Icon {...props} color={colors.ui.error} icon="heart" />}
                        onPress={() => navigation.navigate("Favorites")}
                    />
                    <Spacer />
                    <SettingsItem 
                        title="Payment"
                        left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="cart" />}
                        onPress={() => null}
                    />
                    <Spacer />
                    <SettingsItem 
                        title="Past Orders"
                        left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="history" />}
                        onPress={() => null}
                    />
                    <Spacer />
                    <SettingsItem 
                        title="Logout"
                        left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="door" />}
                        onPress={onLogout}
                    />
                </List.Section>
            </TransparentSafeArea>
        </SettingsBackground>
    );
}