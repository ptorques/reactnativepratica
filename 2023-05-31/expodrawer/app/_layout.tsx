import { Drawer } from "expo-router/drawer";
import React = require("react");

export default function Layout() {
    return <Drawer>
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: "Home",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="telaA"
            options={{
                drawerLabel: "TelaA",
                title: "telaA",
            }}
        />
        <Drawer.Screen
            name="telaB"
            options={{
                drawerLabel: "TelaB",
                title: "telaB",
            }}
        />
    </Drawer>;
}