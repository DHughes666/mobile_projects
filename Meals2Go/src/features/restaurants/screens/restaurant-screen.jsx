import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { RestaurantInfo } from "../components/restaurant-infoCard-comp";


const RestaurantScreen = () => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.searchDef}>
					<Searchbar placeholder="Google me"/>
				</View>
				<View>
					<RestaurantInfo />
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: "#fff",
	},
	searchDef: {
		paddingTop: 40,
		paddingBottom: 16,
		paddingLeft: 8,
		paddingRight: 8,
		// backgroundColor: "green",
	},
	listDef: {
		flex: 1, 
		padding: 16, 
		// backgroundColor: "blue"
	},
});


export default RestaurantScreen;