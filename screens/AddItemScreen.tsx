import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "../types/MenuItem";

interface Props {
  addMenuItem: (item: MenuItem) => void;
}

const COURSES = ["Starter", "Main", "Dessert", "Drink"];

export default function AddItemScreen({ addMenuItem }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState(COURSES[0]);
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !description || !price) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const newItem: MenuItem = {
      name,
      description,
      course,
      price: parseFloat(price),
    };

    addMenuItem(newItem);
    Alert.alert("Success", `${name} added to menu`);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter dish name" />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />

      <Text style={styles.label}>Course</Text>
      <View style={styles.pickerWrap}>
        <Picker selectedValue={course} onValueChange={(v) => setCourse(v)}>
          {COURSES.map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="Enter price"
      />

      <Button title="Add Item" color="#c9a227" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fffaf0" },
  label: { color: "#c9a227", fontWeight: "bold", marginBottom: 5, marginTop: 10 },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c9a227",
    borderRadius: 8,
    padding: 10,
  },
  textArea: { height: 80 },
  pickerWrap: {
    borderWidth: 1,
    borderColor: "#c9a227",
    borderRadius: 8,
    marginBottom: 15,
  },
});
