import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rechercher from './Pages/Recherche';
import Vol from './Pages/Vol/index';
import Reserver from './Pages/Reservation/Reserver';
import Reservation from 'react-native-calendars/src/agenda/reservation-list/reservation';
import Description from './Pages/Description/describe'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche" component={Rechercher} />
        <Stack.Screen name="Vol" component={Vol} /> 
        <Stack.Screen name="Reservation" component={Reserver} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;