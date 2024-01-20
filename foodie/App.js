import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './src/screens/categoriesScreen';
import MealsOverViewScreen from './src/screens/mealsOverviewScreen';

const Stack = createNativeStackNavigator();

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
            name='Meals Categories' 
            component={CategoriesScreen}
            options={{ title: 'Categories' }}
          />
          <Stack.Screen 
            name='Meals Overview'
            component={MealsOverViewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
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
