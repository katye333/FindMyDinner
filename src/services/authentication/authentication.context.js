import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    firebase.auth().onAuthStateChanged(u => {
        if (u) {
            setUser(u);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {

        setIsLoading(true);
        loginRequest(email, password)
            .then(u => {
                setUser(u);
                setIsLoading(false);
            })
            .catch(e => {
                setError(e.toString());
                setIsLoading(false);
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError("Error: Password do not match!");
            return;
        }
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(u => {
                setUser(u);
                setIsLoading(false);
            })
            .catch(e => {
                setError(e.toString());
                setIsLoading(false);
            });
    }

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
    };

    return (
        <AuthenticationContext.Provider 
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
}