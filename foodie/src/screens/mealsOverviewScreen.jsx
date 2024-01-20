import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../../data/dummy_data";

const MealsOverViewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {catId}</Text>
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