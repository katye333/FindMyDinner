import React, { useContext, useState } from "react";

import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    AuthInput
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);
    console.log(error)

    return (
        <AccountBackground>
            <AccountCover />
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
                        secure 
                        onChangeText={p => setPassword(p)}
                    />
                </Spacer>
                {
                    error.length > 0 &&
                    <Spacer size={"large"}>
                        <Text variant="error">{error}</Text>
                    </Spacer>
                }

                <Spacer size="large">
                    <AuthButton 
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)}>
                        Login
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
}