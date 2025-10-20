import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../types/MenuItem";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c9a227",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#c9a227",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#3a3a3a" },
  course: { color: "#c9a227", fontWeight: "600" },
  desc: { color: "#555", marginVertical: 5 },
  price: { color: "#c9a227", fontWeight: "bold" },
});
