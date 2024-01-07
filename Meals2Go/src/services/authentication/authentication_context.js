import { useState, createContext, useEffect } from "react";
import { loginRequest, registerRequest } from "./authentication_service";
import {initializeApp} from "firebase/app"
import { firebaseConfig} from "../../../src/utils/firebaseConfig"
import {initializeAuth, getReactNativePersistence, 
    onAuthStateChanged, signOut, getAuth} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
        })
const authy = getAuth(app);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    const stateChange = () => {
        onAuthStateChanged(authy, (u) => {
            if (u) {
                setUser(u);
                setIsLoading(false);
                console.log('state-change has been fired');
            } else {
                setIsLoading(false);
            }
          });
    }

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(authy, email, password)
            .then((usey) => {
                setUser(usey);
                // setIsAuthenticated(true);
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
                // setIsAuthenticated(true);
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
        // setIsAuthenticated(false);
    };

    useEffect(() => {
        stateChange();
    }, []);


    const values = {
        isAuthenticated: user,
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