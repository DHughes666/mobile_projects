import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';

import CategoriesScreen from './src/screens/categoriesScreen';
import MealsOverViewScreen from './src/screens/mealsOverviewScreen';
import MealDetailScreen from './src/screens/mealDetailScreen';
import FavouriteScreen from './src/screens/favouriteScreen';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: '#917d7d'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#dbc3c3'},
          drawerContentStyle: {backgroundColor: '#7f9e91'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: 'purple',
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => 
            <Ionicons name="apps" color={color} size={size} />
        }}
      />
      <Drawer.Screen  
        name="Favorites" 
        component={FavouriteScreen}
        options={{
          title: 'My Favorites',
          drawerIcon: ({color, size}) => 
            <Ionicons name="heart" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#917d7d'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#dbc3c3'}
            }}
          >
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigator}
              options={{ 
                title: 'All Categoriesy',
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Meals Overview'
              component={MealsOverViewScreen}
            />
            <Stack.Screen 
              name='Meal Detail'
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
