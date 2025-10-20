import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

export type RootStackParamList = {
  Home: { menu: MenuItem[] } | undefined;
  AddItem: { addMenuItem: (item: MenuItem) => void };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenu([...menu, item]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
