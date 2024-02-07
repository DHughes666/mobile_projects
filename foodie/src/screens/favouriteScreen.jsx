import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/mealsList/mealsList_comp";
import { MEALS } from "../../data/dummy_data";
import { FavouritesContext } from "../../store/context/favourite_context";

const FavouriteScreen = ()  => {
    const favouriteMealsContext = useContext(FavouritesContext)

    const favouriteMeals = MEALS.filter(
        (meal) => favouriteMealsContext.ids.includes(meal.id))

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favourite meals yet.
                </Text>
            </View>
        )
    }

    return <MealsList items={favouriteMeals}/>;
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default FavouriteScreen;