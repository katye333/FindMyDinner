import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const Settings = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <Text>Settings</Text>
            <Button title="Logout" onPress={() => onLogout()} />
        </SafeArea>
    );
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
                    <Tab.Navigator
                        screenOptions={createScreenOptions}
                        tabBarOptions={{
                            activeTintColor: "tomato",
                            inactiveTintColor: "gray",
                        }}>
                        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen name="Settings" component={Settings} />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavoritesContextProvider>
    )
}