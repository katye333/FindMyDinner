import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
    padding: 10px;
`;


export const FavoritesBar = ({ favorites, onNavigate }) => {
    if (!favorites.length) {
        return null;
    }

    return (
        <FavoritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favorites</Text>
            </Spacer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    favorites.map(restaurant => {
                        const key = restaurant.name;
                        return (
                            <Spacer key={key} position="left" size="medium">
                                <TouchableOpacity onPress={() => onNavigate("RestaurantDetailScreen", {restaurant})}>
                                    <CompactRestaurantInfo restaurant={restaurant} useImage={true} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavoritesWrapper>
    )
}