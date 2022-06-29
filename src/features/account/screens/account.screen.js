import React from "react";
import { Text } from "react-native";
import { 
    AccountBackground, 
    AccountCover, 
    AccountContainer, 
    AuthButton,
    AnimationWrapper
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="contain"
                    source={require("../../../../assets/food.json")} 
                />
            </AnimationWrapper>

            <Text style={{fontFamily: "Comfortaa_400Regular", fontSize: 30}}>Find my dinner</Text>
            <AccountContainer>
                <AuthButton 
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}>
                    Login
                </AuthButton>

                <Spacer size="large">
                    <AuthButton 
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}>
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
}