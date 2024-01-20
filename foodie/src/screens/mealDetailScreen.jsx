import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../../data/dummy_data";

import MealCommonDetails from "../components/mealCommonDetails";


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
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {ingredients.map(ingredient => 
                <Text key={ingredient}>{ingredient}</Text>)}
            <Text style={styles.subtitle}>Steps</Text>
            {steps.map(step => 
                <Text key={step}>{step}</Text>)}
        </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {},
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
    subtitleContainer: {
        borderBottomColor: '#574040',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4
    },
    subtitle: {
        color: '#240c0c',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detailText: {
        color: 'gray',
        fontStyle: 'bold',
    }
});

export default MealDetailScreen;