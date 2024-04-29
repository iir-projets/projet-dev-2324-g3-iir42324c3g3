import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './Pages/Recherche';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Morrocan Airlines" component={Accueil} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
