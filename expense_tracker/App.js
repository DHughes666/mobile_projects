import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import {ManageExpenses, AllExpenses, RecentExpenses} from './screens';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/iconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary100},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary100},
        tabBarActiveTintColor: GlobalStyles.colors.gray700,
        headerRight: ({tintColor}) => <IconButton 
          icon="add" 
          size={24} 
          color={tintColor} 
          pressIt={() => {
            navigation.navigate('manageExpense')
          }}
        />,
      })}
    >
      <BottomTabs.Screen 
        name='recentExpenses' 
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) =>
            <Ionicons name="hourglass" size={size} color={color}/>
        }}
      />
      <BottomTabs.Screen 
        name='allExpenses' 
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => 
            <Ionicons name='calendar' size={size} color={color}/>
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary200},
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen 
            name="expensesOverview" 
            component={ExpensesOverview}
            options={{
              title: "Expenses Overview",
              headerShown: false,
              
            }}
          />
          <Stack.Screen 
            name='manageExpense' 
            component={ManageExpenses}
            options={{
              title: "Manage Expense",
              // headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


