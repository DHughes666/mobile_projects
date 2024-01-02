import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";
import { MD2Colors } from "react-native-paper";
import { SafeArea, Loading, LoadingAct,
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";
import Search from "../components/search_comp";
import FavouritesBar from "../../../components/favourites/favourite_bar_comp";

const RestaurantScreen = ({ navigation }) => {
	const {isLoading, restaurants, error} = useContext(RestaurantContext)
	const [isToggled, setIsToggled] = useState(false);
		
	return (
		<>
			<SafeArea>
				{isLoading && (
					<Loading style={{
						position: "absolute", top: "50%", left: "50%",
					}}>
						<LoadingAct 
							size={50}
							animating={true}
							color={MD2Colors.blue200}
						/>
					</Loading>
				)}
				<Search 
					isFavouritesToggled={isToggled}
					onFavouritesToggle={() => setIsToggled(!isToggled)}/>
				{isToggled && <FavouritesBar />}
				<RestaurantList
					data={restaurants}
					renderItem={({item}) => {
						return (
							<TouchableOpacity 
								onPress={() => 
									navigation.navigate("RestaurantDetail", {
										restaurant: item,
									})
								}>
								<RestaurantInfo restaurant={item}/>
							</TouchableOpacity>
						)
					}}
					keyExtractor={(item) => item.name}
					
				/>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;