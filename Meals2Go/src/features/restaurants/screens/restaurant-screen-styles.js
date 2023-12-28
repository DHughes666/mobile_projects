import { View, SafeAreaView, StatusBar, FlatList} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
	background-color: ${({theme}) => theme.colors.bg.primary};
`

export const RestaurantContainer = styled(View)`
	flex: 1; 
	padding: ${({theme}) => theme.space[3]};
	background-color: ${({theme}) => theme.colors.bg.primary};
`
export const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {padding: 16,}
})``;

export const Loading = styled.View`
	position: absolute; 
	top: 50%; 
	left: 50%;
`

export const LoadingAct = styled(ActivityIndicator)`
	margin-left: ${({theme}) => theme.space[8]};
`