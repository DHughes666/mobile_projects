import { useContext } from "react";

import MealsList from "../components/mealsList/mealsList_comp";
import { MEALS } from "../../data/dummy_data";
import { FavouritesContext } from "../../store/context/favourite_context";

const FavouriteScreen = ()  => {
    const favouriteMealsContext = useContext(FavouritesContext)

    const favouriteMeals = MEALS.filter(
        (meal) => favouriteMealsContext.ids.includes(meal.id))

    return <MealsList items={favouriteMeals}/>;
};

export default FavouriteScreen;