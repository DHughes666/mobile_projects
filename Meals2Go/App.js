import { StatusBar } from "expo-status-bar";

import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";

export default function App() {
	return (
		<>
			<RestaurantScreen />
			<StatusBar style="auto" />
		</>
	);
}

