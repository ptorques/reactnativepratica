import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import A from './src/screens/TelaA';
import B from './src/screens/TelaB';
import C from './src/screens/TelaC';
import '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="A" component={A} />
      <Tab.Screen name="B" component={B} />
      <Tab.Screen name="C" component={C} />
    </Tab.Navigator>
  );
}


function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer >
  );
}

export default App;