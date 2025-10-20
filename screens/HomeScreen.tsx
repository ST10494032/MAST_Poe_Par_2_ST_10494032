import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MenuItem } from "../types/MenuItem";
const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <View style={cardStyles.card}>
    <Text style={cardStyles.title}>{item.name}</Text>
    {item.description ? <Text style={cardStyles.desc}>{item.description}</Text> : null}
    {typeof item.price === "number" ? (
      <Text style={cardStyles.price}>${item.price.toFixed(2)}</Text>
    ) : null}
  </View>
);

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  desc: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  price: {
    marginTop: 6,
    color: "#c9a227",
    fontWeight: "bold",
  },
});

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
