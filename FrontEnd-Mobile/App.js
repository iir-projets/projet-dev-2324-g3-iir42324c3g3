import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rechercher from './Pages/Recherche';
import Vol from './Pages/Vol/index';
import Reserver from './Pages/Reservation/Reserver';
import Reservation from 'react-native-calendars/src/agenda/reservation-list/reservation';
import Description from './Pages/Description/describe';
import ListVol from './Pages/Vol/index';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche" component={Rechercher} />
        <Stack.Screen
          name="ListVol"
          component={ListVol}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Reservation"
          component={Reserver}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;