import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity, SafeAreaView, StatusBar, Alert } from "react-native";
import styled from "styled-components/native";
import { List, Avatar, Dialog, Portal, Provider, Paragraph, Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
    source: require('../../../../assets/background.jpg')
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
    background-color: rgba(255,255,255,0.8);
`;

const SettingsItemDelete = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
    margin-top: ${props => props.theme.space[5]};
    background-color: ${props => props.theme.colors.ui.error};
`;

const DialogParagraph = styled(Paragraph)`
    padding-bottom: ${props => props.theme.space[2]};
`;

const AvatarContainer = styled.View`
    margin-top: 20px;
    align-items: center;
`;
export const SettingsScreen = ({ navigation}) => {
    const { onLogout, onDelete, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [password, setPassword] = React.useState("");

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    }; 

    const deleteUser = () => {
        onDelete(password)
    }

    const showDialog = () => setIsVisible(true);
    const hideDialog = () => setIsVisible(false);

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
                        onPress={() => Alert.alert("Info", "This feature is coming in a feature release! Stay tuned!")}
                    />
                    <Spacer />
                    <SettingsItem 
                        title="Past Orders"
                        left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="history" />}
                        onPress={() => Alert.alert("Info", "This feature is coming in a future release! Stay tuned!")}
                    />
                    <Spacer />
                    <SettingsItem 
                        title="Logout"
                        left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="door" />}
                        onPress={onLogout}
                    />
                    <Spacer position={"top"} size={"large"} />
                    <SettingsItemDelete 
                        title="Delete User"
                        titleStyle={{fontWeight: '700'}}
                        left={(props) => <List.Icon {...props} color={'black'} icon="delete" />}
                        onPress={showDialog}
                    />
                </List.Section>
                <Provider>
                    <Portal>
                        <Dialog visible={isVisible} onDismiss={hideDialog}>
                            <Dialog.Title>Are you sure?</Dialog.Title>
                            <Dialog.Content>
                                <DialogParagraph>Are you sure you want to delete your account? This action cannot be undone.</DialogParagraph>
                                <TextInput label="Enter your password" value={password} onChangeText={text => setPassword(text)} />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button mode={'text'} onPress={hideDialog}>Cancel</Button>
                                <Button mode={'contained'} onPress={deleteUser}>CONFIRM</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Provider>
                
            </TransparentSafeArea>
        </SettingsBackground>
    );
}