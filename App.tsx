import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

const Tab = createBottomTabNavigator();

// Cast to any to allow passing additional props (addMenuItem) even if the component's typings differ
const AddItemComponent: any = AddItemScreen;

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => setMenu([...menu, item]);

  const GoldTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fffaf0",
      primary: "#c9a227",
      card: "#fff",
      text: "#3a3a3a",
      border: "#c9a227",
      notification: "#c9a227",
    },
  };

  return (
    <NavigationContainer theme={GoldTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "restaurant";
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Add Item") iconName = "add-circle";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#c9a227",
          tabBarInactiveTintColor: "gray",
          headerStyle: { backgroundColor: "#c9a227" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#fffaf0", borderTopColor: "#c9a227" },
        })}
      >
        <Tab.Screen name="Add Item">
          {(props) => <AddItemComponent {...props} addMenuItem={addMenuItem} />}
        </Tab.Screen>
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} menu={menu} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
