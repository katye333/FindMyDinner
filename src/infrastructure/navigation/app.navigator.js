import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { CheckoutNavigator } from "./checkout.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { RestaurantsNavigator } from "./restaurants.navigator";

import { CartContextProvider } from "../../services/cart/cart.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Checkout: "md-cart",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        headerShown: false,
    };
};


export const AppNavigator = () => {
    return (
        <FavoritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
                    <CartContextProvider>
                        <Tab.Navigator
                            screenOptions={createScreenOptions}
                            tabBarOptions={{
                                activeTintColor: "tomato",
                                inactiveTintColor: "gray",
                            }}>
                            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                            <Tab.Screen name="Checkout" component={CheckoutNavigator} />
                            <Tab.Screen name="Map" component={MapScreen} />
                            <Tab.Screen name="Settings" component={SettingsNavigator} />
                        </Tab.Navigator>
                    </CartContextProvider>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavoritesContextProvider>
    )
}