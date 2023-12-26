import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"
import {useFonts as useOswald, 
	Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, 
	Lato_400Regular} from '@expo-google-fonts/lato';

import {theme} from "./src/infrastructure/theme/index"
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant_context";
import { LocationContextProvider } from "./src/services/location/location_context";
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

	const TAB_ICON = {
		Restaurants: ['ios-restaurant-sharp', 'ios-restaurant-outline'],
		Map: ["map-sharp", "map-outline"],
		Settings: ["settings-sharp", "settings-outline"]
	}

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

	const createScreenOptions = ({route}) => ({
		
		tabBarIcon: ({focused, size, color}) => {
			let iconName = TAB_ICON[route.name];
			if (route.name === 'Restaurants') {
				iconName = focused ? iconName[0]: iconName[1];
			} else if (route.name === 'Map') {
				iconName = focused ? iconName[0]: iconName[1];
			} else if (route.name === 'Settings') {
				iconName = focused ? iconName[0]: iconName[1];
			}
			return <Ionicons name={iconName} size={size} color={color} />
		},
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		
	})

	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantContextProvider>
						<NavigationContainer>
							<Tab.Navigator screenOptions={createScreenOptions}>
								<Tab.Screen name="Restaurants" component={RestaurantScreen} />
								<Tab.Screen name="Map" component={Map} />
								<Tab.Screen name="Settings" component={Settings} />
							</Tab.Navigator>
						</NavigationContainer>
					</RestaurantContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

