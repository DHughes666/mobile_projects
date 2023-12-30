import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurant-screen";
import { Text } from "react-native";


const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            headerMode: 'false',
            ...TransitionPresets.ModalPresentationIOS
            }} >
            <RestaurantStack.Screen 
                name="Restaurant"
                component={RestaurantScreen}
            /> 
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={() => <Text>Restaurant Detail</Text>}
            />
        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator;