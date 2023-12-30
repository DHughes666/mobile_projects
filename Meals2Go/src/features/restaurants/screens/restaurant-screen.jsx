import { useContext } from "react";
import { Pressable } from "react-native";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";
import { MD2Colors } from "react-native-paper";
import { SafeArea, Loading, LoadingAct,
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";
import Search from "../components/search_comp";

const RestaurantScreen = ({ navigation }) => {
	const {isLoading, restaurants, error} = useContext(RestaurantContext)
	
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
				<Search />
				<RestaurantList
					data={restaurants}
					renderItem={({item}) => {
						return (
							<Pressable onPress={
								() => navigation.navigate("RestaurantDetail")
								}>
								<RestaurantInfo restaurant={item}/>
							</Pressable>
						)
					}}
					keyExtractor={(item) => item.name}
					
				/>
			</SafeArea>
		</>
	);
};


export default RestaurantScreen;