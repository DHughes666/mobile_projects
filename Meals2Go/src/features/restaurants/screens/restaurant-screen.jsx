import { Searchbar } from "react-native-paper";
import { Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
	background-color: ${({theme}) => theme.colors.bg.primary};
`

const SearchContainer = styled.View`
	paddingTop: ${({theme}) => theme.space[6]};
	paddingBottom: ${({theme}) => theme.space[3]};
	paddingLeft: ${({theme}) => theme.space[2]};
	paddingRight: ${({theme}) => theme.space[2]};
`

const RestaurantContainer = styled.View`
	flex: 1; 
	padding: ${({theme}) => theme.space[3]};
	background-color: ${({theme}) => theme.colors.bg.primary};
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