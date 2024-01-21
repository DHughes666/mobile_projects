import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './src/screens/categoriesScreen';
import MealsOverViewScreen from './src/screens/mealsOverviewScreen';
import MealDetailScreen from './src/screens/mealDetailScreen';
import FavouriteScreen from './src/screens/favouriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen}/>
      <Drawer.Screen name="Favorites" component={FavouriteScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
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
            // options={{ title: 'Categories' }}
          />
          <Stack.Screen 
            name='Meals Overview'
            component={MealsOverViewScreen}
          />
          <Stack.Screen 
            name='Meal Detail'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
