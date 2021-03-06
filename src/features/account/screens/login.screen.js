import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    AuthInput,
    Title,
    ErrorContainer
} from "../components/account.styles";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Text style={{fontFamily: "Comfortaa_400Regular", fontSize: 30}}>Find my dinner</Text>
            <AccountContainer>
                <Spacer size={"large"}>
                    <AuthInput
                        label="Email"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={u => setEmail(u)}
                    />
                </Spacer>
                <Spacer size={"large"}>
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={p => setPassword(p)}
                    />
                </Spacer>
                {
                    error.length > 0 &&
                    <ErrorContainer size={"large"}>
                        <Text style={{color: colors.ui.error, fontWeight: '700'}}>{error}</Text>
                    </ErrorContainer>
                }

                <Spacer size="large">
                {
                    !isLoading 
                        ? 
                            (
                                <AuthButton 
                                    icon="lock-open-outline"
                                    mode="contained"
                                    onPress={() => onLogin(email, password)}>
                                    Login
                                </AuthButton>
                            )
                        : <ActivityIndicator animating={true} color={Colors.blue300} />
                }
                </Spacer>
            </AccountContainer>

            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
}