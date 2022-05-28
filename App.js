import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC6Rk2OR28z3u4vDGcMrWJ_IpO6WWpMMb8",
    authDomain: "mealstogo-meow.firebaseapp.com",
    projectId: "mealstogo-meow",
    storageBucket: "mealstogo-meow.appspot.com",
    messagingSenderId: "849063461590",
    appId: "1:849063461590:web:86af9df7e12b66ca8bff77"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation />
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}