import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurant-screen";


const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen 
                name="Restaurants"
                component={RestaurantScreen}
            />
        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator;