import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'
const { Screen, Navigator } = createBottomTabNavigator()

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

export function TabsRoutes() {
    return (
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: '#F00',
            tabBarInactiveTintColor: '#00F'
        }}
        >
            <Screen
                name="ScreenA"
                component={ScreenA}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon:({color,size})=>(
                        <MaterialIcons 
                        name="home"
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
            <Screen
                name="ScreenB"
                component={ScreenB}
                options={{
                    tabBarLabel: "Logout",
                    tabBarIcon:({color,size})=>(
                        <MaterialIcons 
                        name="logout"
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}