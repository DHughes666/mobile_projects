import { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location_service";

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [location, setLocation] = useState("san francisco");
    const [keyword, setKeyword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        locationRequest(searchKeyword)
            .then(locationTransform)
                .then(result => {
                    setIsLoading(false);
                    setLocation(result);
                })
                .catch(error => {
                    setIsLoading(false);
                    setError(error);
                });
    }

    useEffect(() => {
        onSearch(false)
    }, [])

    const values = {
        isLoading, 
        error, 
        location,
        search: onSearch,
        keyword,
    }
    return (
        <LocationContext.Provider value={values}>
            {children}
        </LocationContext.Provider>
    )
}