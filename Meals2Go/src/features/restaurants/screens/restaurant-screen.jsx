import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea, SearchContainer, RestaurantContainer } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
	return (
		<>
			<SafeArea>
				<SearchContainer>
					<Searchbar placeholder="Google me"/>
				</SearchContainer>
				<FlatList 
					data={[{name: 1}, {name: 2}]}
					renderItem={() => <RestaurantInfo />}
					keyExtractor={(item) => item.name}
					contentContainerStyle={{padding: 16}}
				/>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;