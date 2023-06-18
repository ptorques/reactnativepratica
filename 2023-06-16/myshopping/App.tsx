import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Login from './src/screens/Login/'
import Comprovantes from './src/screens/Comprovantes';
import Produtos from './src/screens/Produtos';
import Upload from './src/screens/Upload';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {backgroundColor: "#7e7eec"},
      headerTitleStyle: {color: "#fff"},
      headerTitleAlign: "center",
      tabBarStyle: {height: "7%",paddingBottom:5},
      tabBarActiveTintColor: "#827ddc"
    }}>
      <Tab.Screen name="Login" component={Login} options={{
        headerShown: false,
        tabBarItemStyle: {display: 'none'},
        tabBarStyle: {display: 'none'}, 
      }}/>
      <Tab.Screen name="Comprovantes" component={Comprovantes} options={{
        tabBarIcon: () => <MaterialIcons name="shopping-cart" size={24} color="#bbbbbb" />
      }}/>
      <Tab.Screen name="Produtos" component={Produtos} options={{
        tabBarIcon: () => <Entypo name="text-document-inverted" size={24} color="#bbbbbb" />
      }}/>
      <Tab.Screen name="Upload" component={Upload} options={{
        tabBarIcon: () => <MaterialIcons name="cloud-upload" size={24} color="#bbbbbb" />
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
}
