import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

export type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// 🌟 Custom Gold Theme for Navigation
const GoldTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFDF6",
    primary: "#D4AF37",
    card: "#D4AF37",
    text: "#2B2B2B",
    border: "#B8860B",
    notification: "#D4AF37",
  },
};

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenu((prev) => [...prev, item]);
  };

  return (
    <NavigationContainer theme={GoldTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#D4AF37" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Chef's Menu" }}>
          {(props) => <HomeScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="AddItem" options={{ title: "Add Menu Item" }}>
          {(props) => <AddItemScreen {...props} addMenuItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
