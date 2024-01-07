import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigator } from "./src/infrastructure/navigation/index";
import {useFonts as useOswald, 
	Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, 
	Lato_400Regular} from '@expo-google-fonts/lato';
import {theme} from "./src/infrastructure/theme/index"
import { AuthenticationContextProvider } from "./src/services/authentication/authentication_context";


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
					<Navigator />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<StatusBar style="auto" />
		</>
	);
}

