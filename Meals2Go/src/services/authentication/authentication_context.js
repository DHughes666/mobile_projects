import { useState, createContext, useEffect } from "react";
import { loginRequest } from "./authentication_service";
import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "../../utils/firebaseConfig";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    const app = initializeApp(firebaseConfig)

    const authy = getAuth(app);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(authy, email, password)
            .then((usey) => {
                setUser(usey);
                setIsLoading(false);
                setIsAuthenticated(true);
            })
            .catch((e) => {
            setIsLoading(false);
            setError(e.message.toString());
        });
    };

    const values = {
        user, 
        isLoading,
        error,
        onLogin,
        isAuthenticated,
    };
    return (
        <AuthenticationContext.Provider value={values}>
            {children}
        </AuthenticationContext.Provider>
    )
}