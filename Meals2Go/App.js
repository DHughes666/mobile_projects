import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {initializeApp} from "firebase/app"
import {getAuth, signInWithEmailAndPassword, 
	initializeAuth, getReactNativePersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";
import Navigator from "./src/infrastructure/navigation/app_navigator";
import {useFonts as useOswald, 
	Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, 
	Lato_400Regular} from '@expo-google-fonts/lato';
import {theme} from "./src/infrastructure/theme/index"
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant_context";
import { LocationContextProvider } from "./src/services/location/location_context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites_context";

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyBK2iBQNxWgMi1i_Qk2OBaGd1TSqf27Uvo',
	authDomain: 'meals2go-56498.firebaseapp.com',
	databaseURL: 'https://project-id.firebaseio.com',
	projectId: 'meals2go-56498',
	storageBucket: 'meals2go-56498.appspot.com',
	messagingSenderId: '308346714959',
	appId: '1:308346714959:web:9679531c6e46d59c2be33a',
	measurementId: 'G-measurement-id',
  };
  
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const authy = getAuth();
	useEffect(() => {
		setTimeout(() => {
			signInWithEmailAndPassword(authy, "albion@email.com", "testpass123")
			.then((user) => {
				console.log(user);
				setIsAuthenticated(true);
			})
			.catch((error) => {
				console.log(error.message);
			});
		}, 2000);
	},[])

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if(!oswaldLoaded || !latoLoaded) {
		return null;
	}

	if(!isAuthenticated) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantContextProvider>
							<Navigator />
						</RestaurantContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

