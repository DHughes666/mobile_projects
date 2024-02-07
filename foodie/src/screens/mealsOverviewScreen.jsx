import {useLayoutEffect} from "react";

import { MEALS, CATEGORIES } from "../../data/dummy_data";
import MealsList from "../components/mealsList/mealsList_comp";


const MealsOverViewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    const pressHandler = () => {
        navigation.navigate('Meal Detail');
    };

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => 
        category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation]);
    
    return (
        <MealsList items={displayedMeals}/>
    )    
};



export default MealsOverViewScreen;