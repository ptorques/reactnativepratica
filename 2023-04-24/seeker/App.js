import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './src/screens/Explore.js';
import Home from './src/screens/Home.js';
import Search from './src/screens/Search.js';
import Transfer from './src/screens/Transfer.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Início" screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Início" component={Home} options={{ title: 'Início' }} />
          <Stack.Screen name="Transferências" component={Transfer} options={{ title: 'Transferências' }} />
        </Stack.Navigator>
      </NavigationContainer >
  );
}

export default App;