import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});


const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState();

    const authenticate = (token) => {
        setAuthToken(token);
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