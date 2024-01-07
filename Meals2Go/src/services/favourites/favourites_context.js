import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication_context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
    const {user} = useContext(AuthenticationContext);
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
          console.log("error storing", e.message);
        }
      };

      const getFavourites = async (uid) => {
        try {
          const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
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
        if (user && user.uid) {
            getFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user && user.uid && favourites.length) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

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