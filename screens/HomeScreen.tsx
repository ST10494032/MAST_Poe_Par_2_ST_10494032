import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { MenuItem } from "../types/MenuItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
  menu: MenuItem[];
};

export default function HomeScreen({ navigation, menu }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍽️ Chef’s Prepared Menu</Text>
      <Text style={styles.subHeader}>Total Items: {menu.length}</Text>

      {menu.length === 0 ? (
        <Text style={styles.emptyText}>No dishes added yet.</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.detail}>Course: {item.course}</Text>
              <Text style={styles.detail}>Price: R{item.price}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.addButton}>
        <Button
          title="Add New Dish"
          onPress={() =>
            navigation.navigate("AddItem", {
              addMenuItem: (item: MenuItem) => {
                // placeholder: replace with real add logic or forward to parent
                console.log("AddItem called with:", item);
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 26, fontWeight: "bold", textAlign: "center" },
  subHeader: { fontSize: 18, marginVertical: 10, textAlign: "center" },
  emptyText: { textAlign: "center", color: "#666", marginTop: 20 },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  dishName: { fontSize: 20, fontWeight: "600" },
  detail: { fontSize: 16, color: "#444" },
  description: { marginTop: 5, fontSize: 14, color: "#555" },
  addButton: { marginTop: 20 },
});
