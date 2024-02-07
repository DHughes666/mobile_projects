import {createContext, useState} from 'react'

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
});


export const FavouritesContextProvider = ({children}) => {
    const [favouriteMealsIds, setfavouriteMealsIds ] = useState([])

    const addFavourite = (id) => {
        setfavouriteMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    const removeFavourite = (id) => {
        setfavouriteMealsIds(
            (currentFavIds) => 
            currentFavIds.filter((mealId) => mealId !== id))
    }

    const values = {
        ids: favouriteMealsIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return (
        <FavouritesContext.Provider value={values}>
            {children}
        </FavouritesContext.Provider>
    )
}