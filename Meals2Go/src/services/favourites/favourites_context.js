import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
          console.log("error storing", e.message);
        }
      };

      const getFavourites = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@favourites');
          return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
        } catch (e) {
          console.log("error loading", e.message);
        }
      };

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (f) => f.placeId !== restaurant.placeId
            );
        setFavourites(newFavourites);
    }

    useEffect(() => {
        getFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    const values = {
        favourites,
        addFavourites: add,
        removeFavourites: remove,
    }
    return (
        <FavouritesContext.Provider value={values}>
            {children}
        </FavouritesContext.Provider>
    )
}