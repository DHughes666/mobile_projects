import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import AllPlaces from './screens/allPlaces';
import AddPlace from './screens/addPlace';
import IconButton from './UI/iconButton';
import {Colors} from './constants/colors'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.primary700}
        }}>
          <Stack.Screen 
            name='All_Places' 
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favourite Places',
              headerRight: ({tintColor}) => <IconButton 
                icon='add' 
                size={24} 
                color={tintColor} 
                pressit={() => navigation.navigate('Add_Place')}
              />
            })}
          />
          <Stack.Screen 
            name='Add_Place' 
            component={AddPlace}
            options={{
              title: 'Add A New Place'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


