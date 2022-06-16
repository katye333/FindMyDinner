import React, { useContext } from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { View, Text } from "react-native";
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
    const { cart, restaurant } = useContext(CartContext);
    return (
        <SafeArea>
            <View style={{marginTop: 50}}>
                <Text>{JSON.stringify(cart)}</Text>
                <CreditCardInput />
            </View>
        </SafeArea>
    );
};