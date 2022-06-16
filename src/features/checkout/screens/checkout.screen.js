import React, { useContext } from "react";
import { View } from "react-native";

import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CartContext } from "../../../services/cart/cart.context";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutScreen = () => {
    const { cart, restaurant } = useContext(CartContext);

    if (!cart.length || !restaurant) {
        return (
            <SafeArea>
                <CartIconContainer>
                    <CartIcon icon="cart-off" />
                    <Text>Your cart is empty!</Text>
                </CartIconContainer>
            </SafeArea>
        )
    }

    return (
        <SafeArea>
            <View style={{marginTop: 50}}>
                <Text>{JSON.stringify(cart)}</Text>
                <CreditCardInput />
            </View>
        </SafeArea>
    );
};