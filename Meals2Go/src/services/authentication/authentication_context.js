import { useState, createContext } from "react";
import { loginRequest } from "./authentication_service";

export const AuthenticationContext = createContext();


export const AuthenticationContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password).then((usey) => {
            setUser(usey);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            setError(error);
        });
    };

    const values = {
        user, 
        isLoading,
        error,
        onLogin,
    };
    return (
        <AuthenticationContext.Provider value={values}>
            {children}
        </AuthenticationContext.Provider>
    )
}