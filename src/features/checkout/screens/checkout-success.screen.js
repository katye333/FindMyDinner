import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
    return (
        <SafeArea>
            <CartIconContainer>
                <CartIcon icon="check-bold" />
                <Spacer position={"top"} size={"large"}>
                    <Text variant="label">Payment made successfully!</Text>
                </Spacer>
            </CartIconContainer>
        </SafeArea>
    )
}