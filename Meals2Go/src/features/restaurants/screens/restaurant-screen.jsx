import { useContext } from "react";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";
import { Searchbar } from "react-native-paper";
import { SafeArea, SearchContainer, 
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
	const {isLoading, restaurants, error} = useContext(RestaurantContext)
	console.log(restaurants);
	return (
		<>
			<SafeArea>
				<SearchContainer>
					<Searchbar placeholder="Google me"/>
				</SearchContainer>
				<RestaurantList
					data={restaurants}
					renderItem={({item}) => {
						console.log(item);
						return (<RestaurantInfo restaurant={item}/>)
					}}
					keyExtractor={(item) => item.name}
					
				/>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;