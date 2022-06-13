import React from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { View } from "react-native";


export const CheckoutScreen = () => {
    return (
        <SafeArea>
            <View style={{marginTop: 50}}>
                <CreditCardInput />
            </View>
        </SafeArea>
    );
};