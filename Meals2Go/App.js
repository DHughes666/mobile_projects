import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigator } from "./src/infrastructure/navigation/index";
import {useFonts as useOswald, 
	Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, 
	Lato_400Regular} from '@expo-google-fonts/lato';
import {theme} from "./src/infrastructure/theme/index"
import { AuthenticationContextProvider } from "./src/services/authentication/authentication_context";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant_context";
import { LocationContextProvider } from "./src/services/location/location_context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites_context";



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

	
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<FavouritesContextProvider>
						<LocationContextProvider>
							<RestaurantContextProvider>
								<Navigator />
							</RestaurantContextProvider>
						</LocationContextProvider>
					</FavouritesContextProvider>
				</AuthenticationContextProvider>
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

