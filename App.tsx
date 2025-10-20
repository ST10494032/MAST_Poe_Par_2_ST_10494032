import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { MenuItem } from "./types/MenuItem";

export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [showSplash, setShowSplash] = useState(true);

  const addMenuItem = (item: MenuItem) => setMenu([...menu, item]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const GoldTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fffaf0",
      primary: "#c9a227",
      card: "#fff",
      text: "#3a3a3a",
    }
  };
}
