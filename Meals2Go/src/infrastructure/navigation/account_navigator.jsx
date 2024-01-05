import { View, Text } from "react-native"
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/accounts/screens/account_screen";
import LoginScreen from "../../features/accounts/screens/login_screen";
import RegisterScreen from "../../features/accounts/screens/register_screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerMode: "none"}}>
            <Stack.Screen name="Main" component={AccountScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;