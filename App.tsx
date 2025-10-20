import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from "react-native";

type MenuItem = {
  id: string;
  name: string;
  price: string;
};

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState("");

  const addMenuItem = () => {
    if (!dishName || !dishPrice) {
      Alert.alert("Error", "Please enter both dish name and price");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: dishName,
      price: dishPrice,
    };

    setMenu([...menu, newItem]);
    setDishName("");
    setDishPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍽️ My Menu App</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"
      />

      <Button title="Add Dish" onPress={addMenuItem} />

      <Text style={styles.subHeader}>Menu Items</Text>
      {menu.length === 0 ? (
        <Text style={styles.emptyText}>No dishes added yet.</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>
                {item.name} - R{item.price}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#3b3b3b",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
  },
  emptyText: {
    color: "#888",
    textAlign: "center",
  },
  menuItem: {
    backgroundColor: "#e7f5ff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 18,
  },
});
