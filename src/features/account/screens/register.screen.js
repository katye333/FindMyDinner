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

export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

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

                <Spacer size={"large"}>
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={p => setRepeatedPassword(p)}
                    />
                </Spacer>

                {
                    error.length > 0 &&
                    <ErrorContainer size={"large"}>
                        <Text style={{color: colors.ui.error, fontWeight: '800'}}>{error}</Text>
                    </ErrorContainer>
                }

                <Spacer size="large">
                    {
                        !isLoading 
                            ? 
                                (
                                    <AuthButton 
                                        icon="email"
                                        mode="contained"
                                        onPress={() => onRegister(email, password, repeatedPassword)}>
                                        Register
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