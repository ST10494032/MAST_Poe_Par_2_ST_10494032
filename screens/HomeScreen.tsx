import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MenuItem } from "../types/MenuItem";

type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
  menu: MenuItem[];
};

export default function HomeScreen({ navigation, menu }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef’s Signature Menu</Text>

      <Text style={styles.count}>Total items: {menu.length}</Text>

      {menu.length === 0 ? (
        <Text style={styles.empty}>No menu items yet. Add your first dish!</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.dish}>{item.dishName}</Text>
              <Text style={styles.desc}>{item.description}</Text>
              <Text style={styles.course}>Course: {item.course}</Text>
              <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.buttonWrap}>
        <Button
          title="➕ Add Menu Item"
          color="#B8860B"
          onPress={() => navigation.navigate("AddItem")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFFDF6" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8860B",
    textAlign: "center",
    marginBottom: 10,
  },
  count: {
    color: "#2B2B2B",
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  empty: {
    color: "#777",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#D4AF37",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  dish: { fontSize: 18, fontWeight: "bold", color: "#2B2B2B" },
  desc: { color: "#4A4A4A", marginTop: 2 },
  course: { color: "#B8860B", marginTop: 4 },
  price: { marginTop: 6, fontWeight: "bold", color: "#2B2B2B" },
  buttonWrap: { marginTop: 20 },
});
