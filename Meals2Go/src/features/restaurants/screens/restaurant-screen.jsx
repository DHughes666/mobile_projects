import { Searchbar } from "react-native-paper";
import { Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
	background-color: #fff;
`

const SearchContainer = styled.View`
	paddingTop: 40px;
	paddingBottom: 16px;
	paddingLeft: 8px;
	paddingRight: 8px;
`

const RestaurantContainer = styled.View`
	flex: 1; 
	padding: 16px;
	background-color: blue;
`

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