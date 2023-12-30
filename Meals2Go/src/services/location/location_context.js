import { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location_service";

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState('Chicago');
    const [location, setLocation] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
        if(!keyword.length) {
            // don't do anything
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
                .then(result => {
                    setIsLoading(false);
                    setLocation(result);
                                       
                })
                .catch(error => {
                    setIsLoading(false);
                    setError(error);
                    
                });
    }, [keyword]);
 
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