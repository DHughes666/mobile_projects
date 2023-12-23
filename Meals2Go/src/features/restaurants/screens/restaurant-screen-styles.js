import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
	background-color: ${({theme}) => theme.colors.bg.primary};
`

export const SearchContainer = styled(View)`
	paddingTop: ${({theme}) => theme.space[6]};
	paddingBottom: ${({theme}) => theme.space[3]};
	paddingLeft: ${({theme}) => theme.space[2]};
	paddingRight: ${({theme}) => theme.space[2]};
`

export const RestaurantContainer = styled(View)`
	flex: 1; 
	padding: ${({theme}) => theme.space[3]};
	background-color: ${({theme}) => theme.colors.bg.primary};
`