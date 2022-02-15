
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import CreateScreen from './screens/Create';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Item'}}/>
        <Stack.Screen name="Create" component={CreateScreen} options={{title:'Create Asset'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'All assets'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
