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
        const item = mealItem.item;
        const mealItemsProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };

        return (
            <MealItem {...mealItemsProps}/>
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