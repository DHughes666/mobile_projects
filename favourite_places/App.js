import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import AllPlaces from './screens/allPlaces';
import AddPlace from './screens/addPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='All_Places' 
            component={AllPlaces}
            options={{
              title: 'All Places'
            }}
          />
          <Stack.Screen 
            name='Add_Place' 
            component={AddPlace}
            options={{
              title: 'Add Place'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


