import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);

    const [cart, setCart] = useState([]);
    const [restaurant, setRestaurant] = useState(null);

    const add = (item, rest) => {
        if (!restaurant || restaurant.placeId !== rest.placeId) {
            setRestaurant(rest);
            setCart([item]);
        }
        setCart([...cart, item]);
    };

    const clear = () => {
        setCart([]);
        setRestaurant(null);
    };

    return (
        <CartContext.Provider value={{
            addToCart: add,
            clearCart: clear,
            restaurant,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}