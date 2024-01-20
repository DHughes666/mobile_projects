import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../../data/dummy_data";

import MealCommonDetails from "../components/mealCommonDetails";
import Subtitle from "../components/mealDetail_comp/subtitle";
import List from "../components/mealDetail_comp/list";


const MealDetailScreen = ({route}) => {
    
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const {imageUrl, duration, complexity, title,
        affordability, ingredients, steps} = selectedMeal

    return (
        <View style={styles.rootContainer}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <MealCommonDetails 
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List items={ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List items={steps} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8
    },
    detailText: {
        color: 'gray',
        fontStyle: 'bold',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
});

export default MealDetailScreen;