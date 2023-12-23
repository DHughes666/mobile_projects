import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea, SearchContainer, 
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
	return (
		<>
			<SafeArea>
				<SearchContainer>
					<Searchbar placeholder="Google me"/>
				</SearchContainer>
				<RestaurantList
					data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, 
						{name: 5}, {name: 6}, {name: 7}, {name: 8}]}
					renderItem={() => <RestaurantInfo />}
					keyExtractor={(item) => item.name}
					
				/>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;