import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "../../data/dummy_data";
import MealItem from "../components/mealItem";

const MealsOverViewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    const renderMealItem = (mealItem) => {
        return (
            <MealItem 
                title={mealItem.item.title}
                imageUrl={mealItem.item.imageUrl}
            />
        )
    };

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});

export default MealsOverViewScreen;