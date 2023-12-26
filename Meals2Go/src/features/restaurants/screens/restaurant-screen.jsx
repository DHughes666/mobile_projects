import { useContext } from "react";
import { View } from "react-native";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import { SafeArea, SearchContainer, 
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
	const {isLoading, restaurants, error} = useContext(RestaurantContext)
	
	return (
		<>
			<SafeArea>
				{isLoading && (
					<View style={{
						position: "absolute", top: "50%", left: "50%",
					}}>
						<ActivityIndicator 
							size={50}
							style={{marginLeft: -25}}
							animating={true}
							color={MD2Colors.blue200}
						/>
					</View>
				)}
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