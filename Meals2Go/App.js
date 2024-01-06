import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {initializeApp} from "firebase/app"
import { firebaseConfig } from "./src/utils/firebaseConfig";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";
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


if(initializeApp(firebaseConfig) !== null){
	const app = initializeApp(firebaseConfig);
	const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
} 

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

