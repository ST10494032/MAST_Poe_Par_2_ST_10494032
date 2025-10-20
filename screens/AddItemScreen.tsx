import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { MenuItem, Course } from "../types/MenuItem";

type Props = NativeStackScreenProps<RootStackParamList, "AddItem"> & {
  addMenuItem: (item: MenuItem) => void;
};

const COURSES: Course[] = ["Starters", "Mains", "Desserts", "Drinks"];

export default function AddItemScreen({ navigation, addMenuItem }: Props) {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState<Course>("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newItem: MenuItem = {
      dishName,
      description,
      course,
      price: parseFloat(price),
    };

    addMenuItem(newItem);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Dish</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="e.g. Lemon Butter Salmon"
        placeholderTextColor="#B0A17B"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Short description of the dish"
        placeholderTextColor="#B0A17B"
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
        placeholder="e.g. 120"
        placeholderTextColor="#B0A17B"
      />

      <View style={styles.buttonWrap}>
        <Button title="Save Dish" color="#B8860B" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFDF6", padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8860B",
    marginBottom: 15,
    textAlign: "center",
  },
  label: { fontWeight: "bold", color: "#2B2B2B", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 10,
    padding: 10,
    marginTop: 6,
    backgroundColor: "#FFFFFF",
    color: "#2B2B2B",
  },
  pickerWrap: {
    borderWidth: 1,
    borderColor: "#D4AF37",
    borderRadius: 10,
    marginTop: 6,
    backgroundColor: "#FFFFFF",
  },
  buttonWrap: {
    marginTop: 20,
    backgroundColor: "#D4AF37",
    borderRadius: 10,
    overflow: "hidden",
  },
});
