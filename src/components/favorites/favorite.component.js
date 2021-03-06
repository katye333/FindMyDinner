import React, { useContext } from "react";
import styled from "styled-components/native"
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
    background-color: transparent;
    border-radius: 50px;
    border-color: #20232a;
    position: absolute;
    top: 25px;
    right: 0px;
    width: 64px;
    z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
    
    const isFavorite = favorites.find(r => r.placeId === restaurant.placeId);
    return (
        <FavoriteButton onPress={() => 
            !isFavorite 
                ? addToFavorites(restaurant) 
                : removeFromFavorites(restaurant)}>
            <AntDesign 
                name={isFavorite ? 'heart' : 'hearto'} 
                size={24} 
                color={isFavorite ? 'red' : 'white'} />
        </FavoriteButton>
    );
};
