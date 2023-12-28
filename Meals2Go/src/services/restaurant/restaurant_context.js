import React, {useState, useContext, useEffect, useMemo, createContext} from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant_service";
import { LocationContext } from "../location/location_context";
import { locations } from "../location/location_mock";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const {location} = useContext(LocationContext);

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = (loc) => {
        setisLoading(true);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setisLoading(false);
                    setRestaurants(results);
                })
                .catch((error) => {
                    setisLoading(false);
                    setError(error);
                })
        }, 2000)
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            console.log(locationString);
            retrieveRestaurants(locationString);
        }
    }, [location]);

    const values = {
        restaurants,
        isLoading,
        error
    };
    return (
        <RestaurantContext.Provider value={values}>
            {children}
        </RestaurantContext.Provider>
    )
}