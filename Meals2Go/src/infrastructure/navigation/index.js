import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication_context";
import AppNavigator from "./app_navigator";
import AccountNavigator from "./account_navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigator = () => {
    const {isAuthenticated} = useContext(AuthenticationContext);
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
    )
}