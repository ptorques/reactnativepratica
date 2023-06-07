import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import A from './src/screens/TelaA';
import B from './src/screens/TelaB';
import C from './src/screens/TelaC';
import '@react-navigation/bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
        <MyTabs></MyTabs>
      </NavigationContainer >
  );
}

export default App;