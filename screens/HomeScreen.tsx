import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MenuItem } from "../types/MenuItem";
import MenuCard from "../components/MenuCard";

interface Props {
  menu: MenuItem[];
}

export default function HomeScreen({ menu }: Props) {
  return (
    <View style={styles.container}>
      {menu.length === 0 ? (
        <Text style={styles.emptyText}>No menu items yet. Add one!</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MenuCard item={item} />}
        />
      )}
      <Text style={styles.count}>Total items: {menu.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffaf0", padding: 15 },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
    marginTop: 50,
  },
  count: {
    textAlign: "center",
    color: "#c9a227",
    fontWeight: "bold",
    marginTop: 10,
  },
});
