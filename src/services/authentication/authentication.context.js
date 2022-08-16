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

    const onDelete = async (password) => {
        setIsLoading(true);
        let currentUser = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        user.reauthenticateWithCredential(credential).then(() => {
            user.delete()
            .then(() => {
                setUser(null);
                setIsLoading(false);
            }).catch((error) => {
                setIsLoading(false);
                setError(error.toString());
            });
        })
        .catch(e => console.log(e))
    }

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
                onDelete,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
}