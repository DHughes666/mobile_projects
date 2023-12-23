import { Searchbar } from "react-native-paper";
import { SafeArea, SearchContainer, RestaurantContainer } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
	return (
		<>
			<SafeArea>
				<SearchContainer>
					<Searchbar placeholder="Google me"/>
				</SearchContainer>
				<RestaurantContainer>
					<RestaurantInfo />
				</RestaurantContainer>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;