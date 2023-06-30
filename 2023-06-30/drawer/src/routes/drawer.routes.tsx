import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
const { Screen, Navigator } = createDrawerNavigator()

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { ScreenC } from "../screens/ScreenC";

export function DrawerRoutes() {
    return (
        <Navigator screenOptions={{
            headerTransparent: true,
            headerTintColor: "#F9D949",
            drawerStyle: {backgroundColor: "#150050"},
            drawerActiveBackgroundColor: "#3F0071",
            drawerActiveTintColor: "#F9D949",
            drawerInactiveTintColor: "#F0F0F0"
        }}>
            <Screen
                name="ScreenA"
                component={ScreenA}
                options={{
                    title: "Login",
                    drawerIcon: ({color, size}) => (<Feather name="log-in" size={24} color="#F9D949" />)
                }}
            />
            <Screen
                name="ScreenB"
                component={ScreenB}
                options={{
                    title: "Cadastro",
                    drawerIcon: ({color, size}) => (<Feather name="plus-circle" size={24} color="#F9D949" />)
                }}
            />
            <Screen
                name="ScreenC"
                component={ScreenC}
                options={{
                    title: "Arquivos",
                    drawerIcon: ({color, size}) => (<Feather name="bookmark" size={24} color="#F9D949" />)
                }}
            />
        </Navigator>
    )
}