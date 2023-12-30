import React from "react";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";
import { SafeArea } from "./restaurant-screen-styles";

const RestaurantDetailScreen = ({route}) => {
    const {restaurant} = route.params;
    return (
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}/>
        </SafeArea>
    )
}

export default RestaurantDetailScreen;