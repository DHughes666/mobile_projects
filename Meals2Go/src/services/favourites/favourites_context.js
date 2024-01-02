import { createContext, useState } from "react";


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((f) => f.id !== restaurant.id);
        setFavourites(newFavourites);
    }


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