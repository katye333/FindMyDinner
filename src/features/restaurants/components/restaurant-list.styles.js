import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

// FlatList needs the style to be applied to the contentContainerStyle
export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

export const OrderButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${props => props.theme.space[2]};
    font-family: ${props => props.theme.fonts.body}
    width: 80%;
    align-self: center;
`;