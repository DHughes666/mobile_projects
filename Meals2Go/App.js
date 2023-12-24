import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useFonts as useOswald, 
	Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, 
	Lato_400Regular} from '@expo-google-fonts/lato';

import {theme} from "./src/infrastructure/theme/index"

import RestaurantScreen from "./src/features/restaurants/screens/restaurant-screen";
import { SafeArea } from "./src/features/restaurants/screens/restaurant-screen-styles";

export default function App() {

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if(!oswaldLoaded || !latoLoaded) {
		return null;
	}

	const Tab = createBottomTabNavigator();

	const Map = () => {
		return <SafeArea>
			<Text>Map</Text>
		</SafeArea>
	}

	const Settings = () => {
		return <SafeArea>
			<Text>Settings</Text>
		</SafeArea>
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator>
						<Tab.Screen name="Restaurants" component={RestaurantScreen} />
						<Tab.Screen name="Map" component={Map} />
						<Tab.Screen name="Settings" component={Settings} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

