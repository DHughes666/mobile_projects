import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../mealItem";

const MealsList = ({items}) => {
    const renderMealItem = (mealItem) => {
        const item = mealItem.item;
        const mealItemsProps = {
            id: item.id,
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
                data={items}
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

export default MealsList;