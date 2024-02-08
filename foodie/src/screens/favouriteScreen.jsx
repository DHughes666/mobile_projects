import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/mealsList/mealsList_comp";
import { MEALS } from "../../data/dummy_data";

const FavouriteScreen = ()  => {
    const favouriteMealIds = useSelector(
        (store) => store.favouriteMeals.ids)

    const favouriteMeals = MEALS.filter(
        (meal) => favouriteMealIds.includes(meal.id))

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