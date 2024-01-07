import { useState, createContext, useEffect } from "react";
import { loginRequest, registerRequest } from "./authentication_service";
import {onAuthStateChanged, signOut} from "firebase/auth";

import {initializeApp} from "firebase/app"
import { firebaseConfig} from "../../../src/utils/firebaseConfig"
import {initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

if(initializeApp(firebaseConfig) !== null){
	const app = initializeApp(firebaseConfig);
	const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
} 

const authy = getAuth(initializeApp(firebaseConfig));

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    onAuthStateChanged(authy, (u) => {
        if (u) {
            setIsLoading(false);
            setUser(u);
        } else {
            setIsLoading(false);
        }
      });

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(authy, email, password)
            .then((usey) => {
                setUser(usey);
                setIsLoading(false);
            })
            .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        registerRequest(authy, email, password)
            .then((regy) => {
                setUser(regy);
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.toString());
            })

    }

    const onLogout = () => {
        setUser(null);
        signOut(authy);
    };


    const values = {
        isAuthenticated: !!user,
        user, 
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
    };
    return (
        <AuthenticationContext.Provider value={values}>
            {children}
        </AuthenticationContext.Provider>
    )
}