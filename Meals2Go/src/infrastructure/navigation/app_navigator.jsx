import {Ionicons} from "@expo/vector-icons"
import { SafeArea } from "../../features/restaurants/screens/restaurant-screen-styles";
import RestaurantsNavigator from "./restaurant_navigator";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map_screen";

const AppNavigator = () => {

    const Tab = createBottomTabNavigator();

	const TAB_ICON = {
		Restaurants: ['ios-restaurant-sharp', 'ios-restaurant-outline'],
		Map: ["map-sharp", "map-outline"],
		Settings: ["settings-sharp", "settings-outline"]
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
        headerShown: false,
        
    })

    return (

        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    
    )
};

export default AppNavigator;