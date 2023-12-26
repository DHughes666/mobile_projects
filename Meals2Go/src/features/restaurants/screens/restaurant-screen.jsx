import { useContext } from "react";
import { View } from "react-native";
import { RestaurantContext } from "../../../services/restaurant/restaurant_context";
import { Searchbar, MD2Colors } from "react-native-paper";
import { SafeArea, SearchContainer, Loading, LoadingAct,
	RestaurantList } from "./restaurant-screen-styles";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const RestaurantScreen = () => {
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