import { Tabs } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Tela A"
        options={{
          href: "./telaA",
        }}
      />
      <Tabs.Screen
        name="Tela B"
        options={{
          href: "./telaB",
        }}
      />
    </Tabs>
  );
}