import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../../data/dummy_data";
import IconButton from "../components/iconButton";

import MealCommonDetails from "../components/mealCommonDetails";
import Subtitle from "../components/mealDetail_comp/subtitle";
import List from "../components/mealDetail_comp/list";
import { 
    addFavourite, removeFavourite 
} from "../../store/redux/favouriteSlice";


const MealDetailScreen = ({route, navigation}) => {
    const favouriteMealIds = useSelector(
        (store) => store.favouriteMeals.ids)
    const dispatch = useDispatch();
    
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const {imageUrl, duration, complexity, title,
        affordability, ingredients, steps} = selectedMeal

    const mealsFavourite = favouriteMealIds.includes(mealId)

    const changeFavouriteStatusHandler = () => {
        if(mealsFavourite){
            // favouriteMealsContext.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
        } else {
            // favouriteMealsContext.addFavourite(mealId);
            dispatch(addFavourite({id: mealId}));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    pressit={changeFavouriteStatusHandler}
                    color='white'
                    icon={mealsFavourite ? 'heart' : 'heart-outline'}
                />;
            }
        })
    }, [navigation, changeFavouriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
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
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
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
        fontWeight: 'bold',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
});

export default MealDetailScreen;