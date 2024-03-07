import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});


const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState();

    useEffect(() => {
        const fetchToken = async () => {
            const StoredToken = await AsyncStorage.getItem('token');

            if (StoredToken) {
                setAuthToken(StoredToken);
            }
        }

        fetchToken()
    }, []);    

    const authenticate = (token) => {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    const logout = () => {
        setAuthToken(null)
    };

    const values = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;