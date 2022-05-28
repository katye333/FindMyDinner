import { FlatList } from "react-native";
import styled from "styled-components/native";

// FlatList needs the style to be applied to the contentContainerStyle
export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;