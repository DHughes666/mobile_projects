import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {theme} from "./src/infrastructure/theme/index"

import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantScreen />
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

