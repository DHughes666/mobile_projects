import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurants/screens/restaurant-screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant_detail_screen";


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
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator;