import {useState} from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";
import { SafeArea } from "./restaurant-screen-styles";

const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);
    const [dessertExpanded, setDessertExpanded] = useState(false);

    const {restaurant} = route.params;
    return (
        <SafeArea>
            <RestaurantInfo restaurant={restaurant}/>
            <ScrollView>
            <List.Accordion
                title="Breakfast"
                left={(props) => <List.Icon {...props} icon="bread-slice"/>}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Bacon" />
                <List.Item title="Sausage" />
                <List.Item title="Eggs" />
            </List.Accordion>

            <List.Accordion
                title="Lunch"
                left={(props) => <List.Icon {...props} icon="food-turkey"/>}
                expanded={lunchExpanded}
                onPress={() => setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Fufu and Efo riro" />
                <List.Item title="Pounded yam with Egusi" />
                <List.Item title="Semo and Ogbono" />
            </List.Accordion>

            <List.Accordion
                title="Dinner"
                left={(props) => <List.Icon {...props} icon="food-variant"/>}
                expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Jollo Rice" />
                <List.Item title="White rice and Stew" />
            </List.Accordion>

            <List.Accordion
                title="Drinks"
                left={(props) => <List.Icon {...props} icon="food-fork-drink"/>}
                expanded={drinksExpanded}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Soy Milk" />
                <List.Item title="Kunu Gyada" />
                <List.Item title="Ugu Juice" />
            </List.Accordion>

            <List.Accordion
                title="Dessert"
                left={(props) => <List.Icon {...props} icon="fruit-cherries"/>}
                expanded={dessertExpanded}
                onPress={() => setDessertExpanded(!dessertExpanded)}
            >
                <List.Item 
                    title="Chocolate Martini" 
                    left={(props) => <List.Icon {...props} icon="fruit-citrus"/>}/>
                <List.Item title="Italian Cookie" />
                <List.Item 
                    title="White Russian" 
                    left={(props) => <List.Icon {...props} icon="fruit-grapes"/>}/>
                <List.Item title="Irish Affogato" />
            </List.Accordion>
            </ScrollView>

        </SafeArea>
    )
}

export default RestaurantDetailScreen;