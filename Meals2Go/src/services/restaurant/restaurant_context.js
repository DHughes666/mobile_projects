import React, {useState, useContext, useEffect, useMemo, createContext} from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant_service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setisLoading(true);
        setTimeout(() => {
            restaurantsRequest()
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
        retrieveRestaurants();
    }, [])

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