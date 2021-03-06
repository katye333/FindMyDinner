import styled from "styled-components/native";
import { Avatar, Button, TextInput, ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
    size: 128,
})`
    background-color: ${props => props.bg || colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
    margin: ${props => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
    color: colors.brand.primary,
    dark: true
})`
    width: 80%;
    align-self: center;
    font-family: ${props => props.theme.fonts.body};
    padding: ${props => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
    color: colors.brand.muted,
    dark: false,
})`
    width: 80%;
    align-self: center;
    font-family: ${props => props.theme.fonts.body};
    padding: ${props => props.theme.space[2]};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: 128,
    animating: true,
    color: colors.brand.primary
})`
    position: absolute;
    top: 50%;
    left: 35%;
    zIndex: 999
`;